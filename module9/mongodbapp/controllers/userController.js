"use strict";


let Models = require("../models"); //matches index.js

const getUsers = (res) => {
//finds all users
    Models.User.find({}, {}, {}, (err, data) => {
    if (err) throw err;
    res.send({result: 200, data: data})
    });
}

const createUser = (data, res) => {
    new Models.User(data).save((err, data) => {
    if (err) throw err
    res.send({ result: 200, data: data})
    });
}

const getUser = async (id, res) => {
    const user = await Models.User.findById(id).exec();
    if (!user) {
        return res.status(404).json({ message: "user not found" })
    }
    res.json(user);
};

module.exports = {
    getUsers, createUser, getUser
}