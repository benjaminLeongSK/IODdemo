let express = require("express");
let router = express.Router();
let Controllers = require("../controllers");


router.get('/', (req, res) => {
    Controllers.userController.getUsers(res);
})

router.get('/:id', (req, res) => {
    Controllers.userController.getUser(res.params.id);
})

router.post('/create', (req, res) => {
    Controllers.userController.createUser(req.body, res)
})


module.exports = router;