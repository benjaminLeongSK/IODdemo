'use strict'
const Books = require('./books')

async function init() {
    await Books.sync();
};

init();

module.exports = {
    Books
};