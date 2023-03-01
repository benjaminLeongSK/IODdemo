const express = require("express");
const router = express.Router();
const Controllers = require("../Controllers");

router.get('/', (req, res) => {
    Controllers.userController.getUsers(res);
})
router.post('/create', (req, res) => {
    Controllers.userController.createUsers(req.body, res)
})
module.exports = router;