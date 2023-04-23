import PostReview from "../models/postReview.js"
import {UserModel} from "../models/users.js"

export const getPosts = async (req, res) => {
    try {
        const postReviews = await PostReview.find();

        res.status(200).json(postReviews)
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}

export const createPosts = async (req, res) => {
    const post = req.body;

    const newPost = new PostReview(post);

    try {
        await newPost.save();
        res.json(newPost)
    } catch (error) {
        res.status(409).json({ message: error.message})
    }
}

export const saveReviews = async (req, res) => {
    try {
        const user = await UserModel.findById(req.body.userID)
        const target = user.savedReviews.indexOf(req.body.reviewID)

        if (target === -1) {
            user.savedReviews.push(req.body.reviewID);
        } else {
            user.savedReviews.splice(target, 1)
        }
        await user.save();

        res.status(200).json({savedReviews: user.savedReviews})
    } catch (error) {
        res.status(409).json({ message: error.message})
    }
}


export const SavedReviewsId = async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.userID);
        res.json({ savedReviews: user?.savedReviews});
    } catch (error) {
        res.status(409).json({ message: error.message})
    }
}

export const likeReview = async (req, res) => {

    try {
        const reviews = await PostReview.findById(req.body.reviewID)
        const target = reviews.likes.indexOf(req.body.userID)

        if (target === -1) {
            reviews.likes.push(req.body.userID)
        } else {
            reviews.likes.splice(target, 1)
        }
        const newData = await reviews.save()
        res.status(200).json({data: newData})
        
    } catch (error) {
        res.status(409).json({ message: error.message})
    }
}