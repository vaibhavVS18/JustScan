import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res)=>{
    res.status(200).send("Hello, backend is running");
})


const Port = process.env.PORT || 3000;
app.listen(Port, ()=>{
    console.log(`server is running on port ${Port}`);
})