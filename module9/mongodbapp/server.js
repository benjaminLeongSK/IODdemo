let dbConnect = require("./dbConnect");
let userRoutes = require('./routes/userRoutes')


const express = require("express");
const app = express();


app.use(express.json());
app.use('/api/users', userRoutes)
require("dotenv").config();
// parse requests of content-type - application/json
app.get("/", (req, res) => {
    res.json({ message: "Welcome to my MongoDB application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});