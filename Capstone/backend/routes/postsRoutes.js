import express from 'express';
import { getPosts, createPosts, saveReviews, SavedReviewsId, likeReview } from '../controllers/postControllers.js';

const postRoutes = express.Router();

postRoutes.get('/', getPosts);
postRoutes.post('/', createPosts);
postRoutes.put('/', saveReviews);
postRoutes.get('/savedReviews/ids/:userID', SavedReviewsId);
postRoutes.put('/like', likeReview);

export default postRoutes;