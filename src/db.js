import mongoose from "mongoose";

//MongoDB connection
export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb')
        console.log('>>> DB connection done');
    } catch (error) {
        console.error('Mongoose connection error:', error);
    }
};