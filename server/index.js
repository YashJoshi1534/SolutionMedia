import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '.env') });
import express from 'express';
import cors from 'cors';

import logger from './utils/logger.js';
import { connectDB } from './config/db.js';
import { requestLogger } from './middleware/requestLogger.js';
import { notFoundHandler, errorHandler } from './middleware/errorHandler.js';
import contactRouter from './routes/contact.js';

// ─── App Setup ───────────────────────────────────────────────────
const app = express();
const PORT = process.env.PORT || 3001;

// ─── Middleware ──────────────────────────────────────────────────
app.use(express.json());
const allowedOrigins = [
  'http://localhost:5174',
  'https://hypemattermedia.com',
  'https://www.hypemattermedia.com',
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin) || origin.includes('vercel.app')) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));
app.use(requestLogger);

// ─── Root Route (important for Vercel) ───────────────────────────
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Hypematter Media API is running 🚀',
  });
});
app.use('/api/contact', contactRouter);

app.get('/api/health', (_req, res) => {
  res.json({
    success: true,
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: `${Math.floor(process.uptime())}s`,
  });
});

// ─── Error Handling ─────────────────────────────────────────────
app.use(notFoundHandler);
app.use(errorHandler);

// ─── Start Server (Local) & Export (Vercel) ──────────────────────
if (process.env.NODE_ENV !== 'production' && process.env.VERCEL !== '1') {
  app.listen(PORT, async () => {
    await connectDB();
    logger.divider();
    logger.info(`🚀 Server running on http://localhost:${PORT}`);
    logger.info(`📬 Receiver: ${process.env.RECEIVER_EMAIL || 'contact@hypemattermedia.com'}`);
    logger.info(`🌐 CORS origin: ${allowedOrigins.join(', ')}`);
    logger.divider();
  });
} else {
  // Setup MongoDB connection out-of-band for Vercel
  connectDB();
}

export default app;
