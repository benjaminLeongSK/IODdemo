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
const updateBooks = (req, res) => {
    Models.Books.update(req.body, { where: { id:req.params.id} }).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}
const deleteBooks = (req, res) => {
    Models.Books.destroy({ where: { id: req.params.id}}).then(function (data) {
        res.send({ result: 200, data: data })
        console.log(req.params.id)
    }).catch(err => {
        throw err
    })
}



module.exports = {
getBooks, createBooks, updateBooks, deleteBooks
}