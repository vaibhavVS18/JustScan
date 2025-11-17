import React, { useRef, useState, useEffect } from "react";
import Webcam from "react-webcam";
import Tesseract from "tesseract.js";
import axios from "../config/axios.js";

const Home = () => {
  const webcamRef = useRef(null);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [detectedText, setDetectedText] = useState("");
  const [found, setFound] = useState(false);
  const isProcessingRef = useRef(false);

  // 🔍 Roll number regex — update as needed
  const rollRegex = /\b\d{3,10}\b/;

  const captureAndScan = async () => {
    if (!webcamRef.current || isProcessingRef.current || found) return;

    isProcessingRef.current = true;

    const imageSrc = webcamRef.current.getScreenshot({
      width: 320,
      height: 240,
    });

    try {
      const result = await Tesseract.recognize(imageSrc, "eng");
      const text = result.data.text || "";
      setDetectedText(text);

      const rollMatch = text.match(rollRegex);

      if (rollMatch) {
        const roll = rollMatch[0];
        console.log("Detected Roll:", roll);

        setFound(true);
        setIsCameraOn(false);

        // 🔥 Send extracted roll number to backend
        try {
          await axios.post("/scan/save", { roll });
        } catch (err) {
          console.error("Error saving roll:", err);
        }
      }
    } catch (err) {
      console.error("OCR Error:", err);
    } finally {
      isProcessingRef.current = false;
    }
  };

  // Repeat OCR only if camera is active
  useEffect(() => {
    let interval;
    if (isCameraOn && !found) {
      interval = setInterval(captureAndScan, 1500); // 1.5 sec to prevent overload
    }
    return () => clearInterval(interval);
  }, [isCameraOn, found]);

  return (
    <div className="bg-gray-700 min-h-screen flex flex-col items-center justify-center text-white">
      <h1 className="text-2xl font-bold mb-4">ID Card Scanner (Fast OCR)</h1>

      {!isCameraOn && !found && (
        <button
          onClick={() => setIsCameraOn(true)}
          className="bg-green-600 px-6 py-2 rounded-lg"
        >
          Start Webcam
        </button>
      )}

      {isCameraOn && !found && (
        <>
          <Webcam
            ref={webcamRef}
            audio={false}
            screenshotFormat="image/jpeg"
            className="rounded-lg border-4 border-white mb-4"
            width={320}
            height={240}
          />
          <button
            onClick={() => setIsCameraOn(false)}
            className="bg-red-600 px-6 py-2 rounded-lg"
          >
            Stop Webcam
          </button>
        </>
      )}

      <div className="mt-6 p-4 bg-gray-800 rounded-lg w-96 text-center">
        <h2 className="font-semibold mb-2">Detected Text:</h2>
        <p className="text-sm break-words">{detectedText || "Scanning..."}</p>
      </div>

      {found && (
        <div className="mt-6 p-4 bg-green-700 rounded-lg text-center">
          🎉 Roll Number Detected & Saved!
        </div>
      )}
    </div>
  );
};

export default Home;
