import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

import dbConnect from "./db/db.js";
import studentRoutes from "./routes/student.routes.js";
import Tesseract from "tesseract.js";

dotenv.config();

dbConnect()
const app = express();

app.use(cors());
// app.use(express.json());
app.use(bodyParser.json({ limit: "10mb" })); // handle base64 images
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.use("/student", studentRoutes);

app.get("/", (req, res)=>{
    res.status(200).send("Hello, backend is running");
})

// OCR Route
// OCR Route
app.post("/scan", async (req, res) => {
  try {
    const { image } = req.body;

    if (!image) {
      return res.status(400).json({ error: "No image provided" });
    }

    const result = await Tesseract.recognize(image, "eng", {
      langPath: "./tessdata",  // <--- use local traineddata folder
      cachePath: "./tessdata"  // <--- prevent creating extra cache folders
    });

    res.json({ text: result.data.text });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "OCR failed", details: err.message });
  }
});


const Port = process.env.PORT || 3000;
app.listen(Port, ()=>{
    console.log(`server is running on port ${Port}`);
})