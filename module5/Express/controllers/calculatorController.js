const Calculator = require('../libraries/calculatorLibraries');
let myCalc = new Calculator();

const addNumber = (req, res) => {
    let {num1, num2} = req.query;
    let sum = myCalc.add(parseInt(num1), parseInt(num2));
    console.log(sum)
    res.status(200)
    res.json({result: sum})
}

const subtractNumber = (req, res) => {
    let {num1, num2} = req.query;
    let sum = myCalc.subtract(parseInt(num1), parseInt(num2));
    console.log(sum)
    res.status(200)
    res.json({result: sum})
}

const multiplyNumber = (req, res) => {
    let {num1, num2} = req.query;
    let sum = myCalc.multiply(parseInt(num1), parseInt(num2));
    console.log(sum)
    res.status(200)
    res.json({result: sum})
}

const divideNumber = (req, res) => {
    let {num1, num2} = req.query;
    let sum = myCalc.divide(parseInt(num1), parseInt(num2));
    console.log(sum)
    res.status(200)
    res.json({result: sum})
}

module.exports = {
    addNumber,
    subtractNumber,
    multiplyNumber,
    divideNumber
}