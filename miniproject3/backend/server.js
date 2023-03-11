let express = require("express")
let app = express();
let dbConnect = require("./dbConnect")
require("dotenv").config();

dbConnect.connectMysql()

app.use(express.json());
app.get("/", (req, res) => {
    res.json({ message: "Welcome to my MySQL application." });
});

let booksRoute = require('./routes/booksRoute')
app.use('/api/books', booksRoute)

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});