import "dotenv/config";
import app from "./app.js";
import { testDatabaseConnection } from "./config/database.js";

const PORT = process.env.PORT || 3000;

async function start() {
  try {
    await testDatabaseConnection();
  } catch (error) {
    console.error("Database connection failed. Server not started.");
    console.error(error.message);
    process.exit(1);
  }

  app.listen(PORT, () => {
    console.log(`Villaris API running on port ${PORT}`);
  });
}

start();
