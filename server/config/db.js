import mongoose from 'mongoose';
import logger from '../utils/logger.js';

export const connectDB = async () => {
    try {
        if (!process.env.MONGO_URI) {
            throw new Error('MONGO_URI is clearly not defined in environment variables.');
        }

        const conn = await mongoose.connect(process.env.MONGO_URI);
        logger.success(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        logger.error('Error connecting to MongoDB', error.message);
        process.exit(1);
    }
};
