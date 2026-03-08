# Deployment Guide (Vercel Backend / Render Frontend)

This guide correctly separates the Monorepo so that **Vercel hosts the Express Backend / MongoDB functions**, and **Render hosts the Static Vite Frontend**.

## 1. Frontend Deployment (Render)
1. In your Render Dashboard, click **New > Static Site**.
2. Connect this repository.
3. Configure the settings:
   - **Root Directory**: `client`
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
4. **Environment Variables**:
   - `VITE_API_URL`: The deployed URL of your Vercel backend (e.g., `https://my-backend-vercel.app`).

## 2. Backend Deployment (Vercel)
Vercel is now configured to read the explicit `server.js` wrapper in the root directory using `@vercel/node`.
1. Go to your Vercel Dashboard and click **Add New > Project**.
2. Connect this repository.
3. Configure settings:
   - **Framework Preset**: Other
   - **Build Command**: `npm install --production`
   - **Output Directory**: Override and leave blank.
4. **Environment Variables**:
   - `MONGO_URI`: Your MongoDB connection string.
   - `EMAIL_USER`: Your Nodemailer email address.
   - `EMAIL_PASS`: Your Nodemailer email password.
   - `RECEIVER_EMAIL`: Where you want to receive admin notifications.

## Local Development
Run the backend:
```bash
node server.js
```

Run the frontend:
```bash
cd client
npm install
npm run dev
```
