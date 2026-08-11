import express from "express";
import cors from "cors";

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL,
}));

app.use(express.json());

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Villaris API is running",
  });
});

export default app;
