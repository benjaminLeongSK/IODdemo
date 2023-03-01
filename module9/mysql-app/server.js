const express = require("express");
const app = express();
require("dotenv").config();
let dbConnect = require("./dbConnect");
dbConnect.connectMysql()
// parse requests of content-type -application/json
let userRoutes = require('./routes/userRoutes')
app.use('/api/users', userRoutes)

app.use(express.json());
app.get("/", (req, res) => {
    res.json({ message: "Welcome to my MYSQL application." });
});
// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});