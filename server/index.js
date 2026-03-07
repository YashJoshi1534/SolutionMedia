import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import logger from './utils/logger.js';
import { requestLogger } from './middleware/requestLogger.js';
import { notFoundHandler, errorHandler } from './middleware/errorHandler.js';
import contactRouter from './routes/contact.js';

// ─── App Setup ───────────────────────────────────────────────────
const app = express();
const PORT = process.env.PORT || 3001;

// ─── Middleware ──────────────────────────────────────────────────
app.use(express.json());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
}));
app.use(requestLogger);

// ─── Routes ─────────────────────────────────────────────────────
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

// ─── Start Server ───────────────────────────────────────────────
app.listen(PORT, () => {
  logger.divider();
  logger.info(`🚀 Mail server running on http://localhost:${PORT}`);
  logger.info(`📬 Receiver: ${process.env.RECEIVER_EMAIL || 'contact@hypemattermedia.com'}`);
  logger.info(`🌐 CORS origin: ${process.env.FRONTEND_URL || 'http://localhost:5173'}`);
  logger.divider();
});
