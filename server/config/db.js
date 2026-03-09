import mongoose from 'mongoose';
import logger from '../utils/logger.js';

let isConnected = false;

const connectDB = async () => {
    if (isConnected) {
        logger.info('Using existing MongoDB connection');
        return;
    }

    try {
        if (!process.env.MONGO_URI) {
            throw new Error('MONGO_URI is not defined in environment variables.');
        }

        const conn = await mongoose.connect(process.env.MONGO_URI, {
            dbName: 'SolutionMedia',
            serverSelectionTimeoutMS: 5000,
            bufferCommands: false,
        });

        isConnected = conn.connections[0].readyState === 1;
        logger.success(`MongoDB connected to emailSender (${conn.connection.host})`);
    } catch (error) {
        isConnected = false;
        logger.error('Error connecting to MongoDB:', error.message);
        throw error; // re-throw so the middleware can return 500
    }
};

export { connectDB };
