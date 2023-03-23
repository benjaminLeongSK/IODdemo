let express = require("express");
let router = express.Router();
let Controllers = require("../controllers");


router.get('/', (req, res) => {
    Controllers.postsController.getPosts(res);
})

router.post('/create', (req, res) => {
    Controllers.postsController.createPosts(req.body, res)
})


module.exports = router;