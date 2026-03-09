import nodemailer from "nodemailer";
import logger from "../utils/logger.js";
import dotenv from "dotenv";
dotenv.config();
let transporter = null;

function getTransporter() {
  if (!transporter) {
    const maskedEmail = process.env.EMAIL_USER
      ? process.env.EMAIL_USER.replace(/(.{3}).*(@.*)/, "$1***$2")
      : "❌ NOT SET";

    logger.info(`Initializing Gmail transporter (${maskedEmail})`);

    transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 10000,
    });
  }
  return transporter;
}

// Proxy that lazily creates the transporter on first use (e.g. .sendMail())
// This ensures env vars from dotenv are loaded before the transporter is built.
export default new Proxy({}, {
  get(_, prop) {
    const t = getTransporter();
    const value = t[prop];
    return typeof value === "function" ? value.bind(t) : value;
  },
});