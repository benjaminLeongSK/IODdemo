const express = require("express");
const app = express();
require("dotenv").config();
let dbConnect = require("./dbConnect");
dbConnect.connectMysql()
app.use(express.json());
// parse requests of content-type -application/json
let userRoutes = require('./routes/userRoutes')
app.use('/api/users', userRoutes)

let postRoute = require('./routes/postRoutes')
app.use('/api/posts',postRoute)

let catFactsRoutes = require('./routes/randomQuoteRoutes')
app.use('/api/catFacts', catFactsRoutes)

app.get("/", (req, res) => {
    res.json({ message: "Welcome to my MYSQL application." });
});
// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});