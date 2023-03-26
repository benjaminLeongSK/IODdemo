var express = require("express");
var router = express.Router();
var Controllers = require("../controllers");


router.get('/', (req, res) => {
    Controllers.randomQuoteController.getRandomQuote(req.query,res);
})


module.exports = router;