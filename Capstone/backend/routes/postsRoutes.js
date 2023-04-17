import express from 'express';
import { getPosts } from '../controllers/postControllers.js';

const postRoutes = express.Router();

postRoutes.get('/', getPosts)

export default postRoutes;