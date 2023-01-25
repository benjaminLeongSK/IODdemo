const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World!')
})

router.get('/new', (req, res) => {
    res.send('Add User')
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    res.send('Get User ID: ' + id)
})

router.post('/', (req, res) => {
    res.send("Create user")
})

module.exports = router;