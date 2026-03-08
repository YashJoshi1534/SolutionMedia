# Deployment Guide (Client/Server Architecture)

The project is now split into a proper Monorepo. The React frontend should be deployed as a static site (Vercel, Render), while the Node.js backend should be deployed as a Web Service (Render, Heroku, Railway).

## 1. Backend Deployment (Render)
1. In your Render Dashboard, click **New > Web Service**.
2. Connect this repository.
3. Configure the settings:
   - **Root Directory**: `server`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
4. **Environment Variables**:
   - `MONGO_URI`: Your MongoDB connection string.
   - `EMAIL_USER`: Your Nodemailer email address.
   - `EMAIL_PASS`: Your Nodemailer email password.
   - `RECEIVER_EMAIL`: Where you want to receive admin notifications.
   - `FRONTEND_URL`: URL of your deployed frontend (e.g., `https://my-frontend.vercel.app`) to whitelist CORS.

## 2. Frontend Deployment (Vercel)
1. Go to your Vercel Dashboard and click **Add New > Project**.
2. Connect this repository.
3. Configure settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. **Environment Variables**:
   - `VITE_API_URL`: The deployed URL of your Render backend (e.g., `https://my-backend.onrender.com`).

## Local Development
Run the backend:
```bash
cd server
npm install
npm run dev
```

Run the frontend:
```bash
npm install
npm run dev
```
