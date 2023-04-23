import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../models/users.js";

export const userRegister = async (req, res) => {
    const { username, password, bio } = req.body;
    const user = await UserModel.findOne({ username });

    if (user) {
        return res.json({message: "User already exist"});
    }

    const maskedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({ username, bio, password: maskedPassword});
    await newUser.save();

    res.json({message: "User successfully registered"})
}

export const userLogin = async (req, res) => {
    const { username, password } = req.body;
  
    const user = await UserModel.findOne({ username });
  
    if (!user) {
      return res.status(400).json({ message: "User does not exist, please sign up" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ message: "Password is incorrect, please check again" });
    }

    const token = jwt.sign({ id: user._id }, "secret");
    res.json({ token, userID: user._id, username });
}

export const fetchUser = async (req, res) => {
    const userID = req.params.userId
    const user = await UserModel.findOne({_id: userID})
    console.log(user)
    res.json(user)
}