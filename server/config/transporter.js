import nodemailer from "nodemailer";
import logger from "../utils/logger.js";
import dotenv from "dotenv";
dotenv.config();
const maskedEmail = process.env.EMAIL_USER
  ? process.env.EMAIL_USER.replace(/(.{3}).*(@.*)/, "$1***$2")
  : "❌ NOT SET";

logger.info(`Initializing Gmail transporter (${maskedEmail})`);

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  connectionTimeout: 5000,
});

// Verify transporter connection
transporter.verify((error, success) => {
  if (error) {
    logger.error("❌ Email transporter verification failed:", error);
  } else {
    logger.info("✅ Email transporter is ready to send emails");
  }
});

export default transporter;