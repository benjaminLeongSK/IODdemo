"use strict";
const Models = require("../models");

const getBooks = (res) => {
    Models.Books.findAll({}).then(function (data) {
        res.send({result: 200 , data: data})
    }).catch(err => {
        throw err
    })
}
const createBooks = (data, res) => {
    Models.Books.create(data).then(function (data) {
        res.send({ result: 200 , data: data})
    }).catch(err => {
        throw err
    })
}
module.exports = {
getBooks, createBooks
}