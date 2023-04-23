import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema({
    restaurantName: { type: String, required: true },
    restaurantAddress: { type: String, required: true },
    rating: { type: Number, required: true },
    description: { type: String, required: true },
    tags: [{ type: String, required: true }],
    image: [{ type: String }],
    likes: [{ type: String, required: true }],
    createdAt: { type: Date, default: new Date() },
    reviewUser: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true},
    username: { type: String }

});

const PostReview = mongoose.model('PostReview', reviewSchema);

export default PostReview;