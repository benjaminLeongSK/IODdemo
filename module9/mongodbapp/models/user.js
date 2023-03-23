const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const user = new Schema({
    firstName: { type: String, trim: true, required: true },
    lastName: { type: String, trim: true, required: true },
    username: { type: String, trim: true, required: true },
    emailId: { type: String, trim: true, required: true, unique:true },
    password: { type: String }
});
module.exports = mongoose.model("user", user);