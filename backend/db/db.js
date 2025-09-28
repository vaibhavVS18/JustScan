import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

function dbConnect(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("connected to mongoDB");
    })
    .catch(err=>{
        console.log(err);
    })
}

export default dbConnect;

// or you can use async-await with try catch