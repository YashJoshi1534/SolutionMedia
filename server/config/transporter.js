import nodemailer from "nodemailer";
import logger from "../utils/logger.js";

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

// ❌ DO NOT run transporter.verify() in serverless environments

export default transporter;