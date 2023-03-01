class Logger {
    constructor() {
        this.id = Math.floor(Math.random() * 100000)
    }
    log(id, value) {
        console.log(`this is your id: ${id}, this is your result ${value}`)
    }
}

module.exports = Logger;