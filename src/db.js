import mongoose from "mongoose";

//MongoDB connection
export const connectDB = async () => {
    try {
        //mongoose.connect('mongodb+srv://node:node@cluster0.myqdxm4.mongodb.net/db?retryWrites=true&w=majority');
        await mongoose.connect('mongodb://79.143.93.103:27017/users')
        console.log('>>> DB connection done');
    } catch (error) {
        console.error('Mongoose connection error:', error);
    }
};