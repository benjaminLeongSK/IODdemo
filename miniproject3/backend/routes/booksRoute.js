
var express = require("express");
var router = express.Router();
var Controllers = require("../controllers");


router.get('/', (req, res) => {
    Controllers.booksController.getBooks(res);
})

router.post('/create', (req, res) => {
    Controllers.booksController.createBooks(req.body, res)
})

router.put('/:id', (req, res) => {
    Controllers.userController.updateUser(req, res)
})

router.delete('/:id', (req, res) => {
    Controllers.userController.deleteUser(req, res)
})

module.exports = router;