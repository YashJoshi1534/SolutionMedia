# Deployment Guide (Vercel Backend / Render Frontend)

This guide walks you through deploying the **React Frontend** to Render as a static site and deploying your **Node/Express Backend** (with MongoDB) to Vercel as a Serverless API!

## 1. Frontend Deployment (Render)
As observed, Render needs to execute the Vite build process.
1. In your Render Dashboard, click **New > Static Site**.
2. Connect this repository.
3. Configure the settings:
   - **Root Directory**: `.` (Leave blank or specifically set to root, **NOT** `server`)
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
4. **Environment Variables**:
   - `VITE_API_URL`: The deployed URL of your Vercel backend (e.g., `https://my-backend-vercel.app`).

*Render will now properly install standard packages and run the Vite compiler without throwing "Missing script: build" errors!*

## 2. Backend Deployment (Vercel)
Vercel is heavily optimized for Serverless functions, meaning it will automatically host your `/api` endpoints using the attached `vercel.json` and `api/index.js` wrapper.
1. Go to your Vercel Dashboard and click **Add New > Project**.
2. Connect this repository.
3. Configure settings:
   - **Framework Preset**: Other
   - **Build Command**: `cd server && npm install`
   - **Output Directory**: `api`
4. **Environment Variables**:
   - `MONGO_URI`: Your MongoDB connection string.
   - `EMAIL_USER`: Your Nodemailer email address.
   - `EMAIL_PASS`: Your Nodemailer email password.
   - `RECEIVER_EMAIL`: Where you want to receive admin notifications.

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
