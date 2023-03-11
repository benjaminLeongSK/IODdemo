import express from "express"

const app = express();

app.use(express.json());
app.get("/", (req, res) => {
    res.json({ message: "Welcome to my MySQL application." });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});