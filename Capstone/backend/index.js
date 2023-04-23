import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import * as dotenv from 'dotenv';
import postRoutes from './routes/postsRoutes.js';
import { userRoutes } from './routes/userRoutes.js';


const app = express();

app.use(express.json({limit: '25mb'}));
app.use(cors());

app.use('/posts', postRoutes)
app.use("/auth", userRoutes);
dotenv.config()

const CONNECTION_URL = `mongodb+srv://benjaminlsk96:${process.env.REACT_APP_password}@cluster0.bmdtzpc.mongodb.net/test`
const PORT = process.env.REACT_APP_port; 

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then (() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));
