import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config({ path: "" });

const app = express();
app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

app.post("/api/generate", async (req, res) => {
  try {
    const { prompt } = req.body;

    const result = await model.generateContent(prompt);

    const text = result.response?.text() || "No response received.";

    res.json({ reply: text });
  } catch (error) {
    console.error("🔥 Gemini Error:", error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(5000, () => {
  console.log("✔ Server running on http://localhost:5000");
});

console.log("Loaded Key:", process.env.GEMINI_API_KEY);
