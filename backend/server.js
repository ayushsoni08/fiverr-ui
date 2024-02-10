import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRoute from './routes/user.route.js';
import gigRoute from './routes/gig.route.js';
import reviewRoute from './routes/review.route.js';
import orderRoute from './routes/order.route.js';
import messageRoute from './routes/message.route.js';
import coversationRoute from './routes/conversation.route.js';

const app = express();
dotenv.config();
mongoose.set('strictQuery', true);

app.use('/api/users', userRoute);

const connect = async () =>{

    try{
        await mongoose.connect(process.env.MONGO)
        console.log('connected to mongodb');
    } catch(error){
        console.log(error);
    }
}


app.listen(8800, ()=>{
    connect();
    console.log('backend server is running');
})