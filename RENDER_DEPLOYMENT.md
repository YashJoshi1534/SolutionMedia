# Deploying to Render

This project is a React application built with Vite and Tailwind CSS. It is configured to be deployed easily on [Render](https://render.com/).

## Steps to Deploy

1. **Push to GitHub / GitLab / Bitbucket**
   Make sure you push this code to a repository on your preferred Git provider.

2. **Create a New Static Site on Render**
   - Go to your Render Dashboard (https://dashboard.render.com/).
   - Click the "New" button and select **"Static Site"**.
   - Connect the repository you pushed the code to.

3. **Configure the Static Site Settings**
   Use the following settings for your Render deployment:
   - **Name**: `metro-media-landing` (Or anything you like)
   - **Branch**: `main` (Or the branch you are using)
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`

4. **Deploy Options**
   - **Auto-Deploy**: Yes (Recommended)
   - **Environment Variables**: Provide any environment variables if needed. Currently, the app does not require any.

5. **Create Static Site**
   - Click the **"Create Static Site"** button.
   - Render will now pull your code, run the build command, and publish the `dist` folder to a live URL.

## Local Development
To run this project locally:
```bash
npm install
npm run dev
```

To build for production locally:
```bash
npm run build
npm run preview
```
