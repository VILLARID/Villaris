import express from "express";
import cors from "cors";
import projectsRouter from "./routes/projects.routes.js";

function isAllowedOrigin(origin) {
  if (!origin) return true;

  if (process.env.FRONTEND_URL && origin === process.env.FRONTEND_URL) {
    return true;
  }

  let hostname;
  try {
    hostname = new URL(origin).hostname;
  } catch (error) {
    return false;
  }

  if (process.env.NODE_ENV !== "production" && hostname === "localhost") {
    return true;
  }

  const isAllowedVercelPreview =
    hostname.endsWith(".vercel.app") && hostname.startsWith("villaris-");

  return Boolean(isAllowedVercelPreview);
}

const app = express();

app.use(cors({
  origin(origin, callback) {
    if (isAllowedOrigin(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
}));

app.use(express.json());

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Villaris API is running",
  });
});

app.use("/api/projects", projectsRouter);

export default app;
