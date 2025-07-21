import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

import { connectDB } from './config/db.js';
import routes from './routes/route.js';   
import rateLimiter from './middleware/rateLimiter.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV !== 'production') {
  app.use(cors({
    origin: "http://localhost:5173", 
  }));
}

app.use(express.json());
app.use(rateLimiter);

app.use("/api/notes", routes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
  });
});
