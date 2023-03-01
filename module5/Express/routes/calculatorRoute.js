const express = require('express');
const router = express.Router();
const calculatorController = require('../controllers/calculatorController')

router.get('/add', (req, res) => {
    calculatorController.addNumber(req, res);
}) 

router.get('/subtract', (req, res) => {
    calculatorController.subtractNumber(req, res);
}) 

router.get('/multiply', (req, res) => {
    calculatorController.multiplyNumber(req, res);
}) 

router.get('/divide', (req, res) => {
    calculatorController.divideNumber(req, res);
}) 

module.exports = router;