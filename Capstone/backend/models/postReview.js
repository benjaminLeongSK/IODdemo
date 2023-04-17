import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema({
    restaurantName: String,
    restaurantAddress: String,
    rating: Number,
    description: String,
    tags: [String],
    image: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }

});

const PostReview = mongoose.model('PostReview', reviewSchema);

export default PostReview;