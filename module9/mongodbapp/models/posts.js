const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const posts = new Schema({
    username: { type: String, trim: true, required: true },
    title: { type: String, trim: true, required: true },
    description: { type: String, trim: true, required: true },
    likes: { type: Number},
    comments: { type: String, trim: true }
});
module.exports = mongoose.model("posts", posts);