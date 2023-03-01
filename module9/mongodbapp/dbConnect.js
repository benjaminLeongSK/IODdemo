'use strict';
const Mongoose = require('mongoose');

const uri = process.env.DB_URI || "mongodb://127.0.0.1:27017/myFirstDatabase";

const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

//Connect to MongoDB
Mongoose.connect(uri, mongooseOptions, function (err) {
if (err) {
    console.log("DB Error: ", err);
    process.exit(1);
} else {
    console.log('MongoDB Connected');
}
});
// Get the default connection
const db = Mongoose.connection;
// Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));


exports.Mongoose = Mongoose;