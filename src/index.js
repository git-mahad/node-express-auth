import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import { connectDB } from './lib/db.js';
import cookieParser from 'cookie-parser'

const app = express();

dotenv.config();

const PORT = process.env.PORT;

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRoutes);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log('App is running on PORT: ' + PORT);
    });
}).catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
});