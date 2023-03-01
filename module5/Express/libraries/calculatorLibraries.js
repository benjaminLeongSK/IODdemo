const Logger = require('./loggerLibraries')

class Calculator {
    constructor() {
        this.id = Math.floor(Math.random() * 100000)
        this.logger = new Logger()
    }
    #log=(value) => {
        this.logger.log(this.id, value)
    }
    add(num1, num2) {
        const value = num1 + num2;
        this.#log(value);
        return value;
    }
    subtract(num1, num2) {
        const value = num1 - num2;
        this.#log(value);
        return value;
    }
    multiply(num1, num2) {
        const value = num1 * num2;
        this.#log(value);
        return value;
    }
    divide(num1, num2) {
        const value = num1 / num2;
        this.#log(value);
        return value;
    }

}

module.exports=Calculator;