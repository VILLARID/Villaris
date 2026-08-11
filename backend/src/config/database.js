import pg from "pg";

const { Pool } = pg;

function createPool() {
  if (process.env.DATABASE_URL) {
    return new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false,
      },
    });
  }

  return new Pool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  });
}

const pool = createPool();

async function testDatabaseConnection() {
  const client = await pool.connect();
  try {
    await client.query("SELECT NOW()");
    console.log("Database connected successfully");
  } finally {
    client.release();
  }
}

export { pool, testDatabaseConnection };
