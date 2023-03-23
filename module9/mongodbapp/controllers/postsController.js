"use strict";


let Models = require("../models"); //matches index.js

const getPosts = (res) => {
//finds all Posts
    Models.Posts.find({}, {}, {}, (err, data) => {
    if (err) throw err;
    res.send({result: 200, data: data})
    });
}

const createPosts = (data, res) => {
    new Models.Posts(data).save((err, data) => {
    if (err) throw err
    res.send({ result: 200, data: data})
    });
}


module.exports = {
    getPosts, createPosts
}