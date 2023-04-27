import express from 'express';
import { fetchUser, updateUser, userLogin, userRegister } from '../controllers/userController.js';


const router = express.Router();

router.post("/register", userRegister);
router.post("/login", userLogin);
router.get("/user/:userId", fetchUser);
router.put("/user/:userId", updateUser)

export { router as userRoutes };
