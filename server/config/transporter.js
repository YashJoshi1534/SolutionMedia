import nodemailer from 'nodemailer';
import logger from '../utils/logger.js';

const maskedEmail = process.env.EMAIL_USER
    ? process.env.EMAIL_USER.replace(/(.{3}).*(@.*)/, '$1***$2')
    : '❌ NOT SET';

logger.info(`Initializing Gmail transporter (${maskedEmail})`);

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// Verify on import
transporter
    .verify()
    .then(() => logger.success('Gmail SMTP connection verified — ready to send emails'))
    .catch((err) => {
        logger.error('SMTP verification failed', err.message);
        logger.warn('Emails will NOT be sent until credentials are configured in .env');
    });

export default transporter;
