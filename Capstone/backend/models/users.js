import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    savedReviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "reviews"}],
    bio: { type: String, required: true },
    createdAt: { type: Date, default: new Date() },
    profilePicture: [{ type: String }],
});

export const UserModel = mongoose.model('users', userSchema);
