import express from 'express';
import { fetchUser, userLogin, userRegister } from '../controllers/userController.js';


const router = express.Router();

router.post("/register", userRegister);
router.post("/login", userLogin);
router.get("/user/:userId", fetchUser);

export { router as userRoutes };
