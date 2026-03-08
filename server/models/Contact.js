import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    subject: {
        type: String,
        required: true,
        trim: true
    },
    message: {
        type: String,
        required: true,
        trim: true
    },
    preferredDate: {
        type: String,
        trim: true
    },
    preferredTime: {
        type: String,
        trim: true
    }
}, {
    timestamps: true
});

const Contact = mongoose.model('Contact', ContactSchema);

export default Contact;
