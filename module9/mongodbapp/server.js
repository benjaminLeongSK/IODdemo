let dbConnect = require("./dbConnect");
let userRoutes = require("./routes/userRoutes");
require("dotenv").config();


const express = require("express");
const app = express();


app.use(express.json());
app.use('/api/users', userRoutes)
app.get("/", (req, res) => {
    res.json({ message: "Welcome to my MongoDB application." });
});

let postsRoute = require('./routes/postsRoutes')
app.use('/api/posts',postsRoute)

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});