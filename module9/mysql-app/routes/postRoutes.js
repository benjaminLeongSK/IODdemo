var express = require("express");
var router = express.Router();
var Controllers = require("../controllers");


router.get('/', (req, res) => {
    Controllers.postsController.getPost(res);
})

router.post('/create', (req, res) => {
    Controllers.postsController.createPost(req.body, res)
})


module.exports = router;