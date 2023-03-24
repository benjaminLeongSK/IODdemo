'use strict'

const User = require('./user');
const Posts = require('./posts');

async function init () {
    await User.sync();
    await Posts.sync();
};

init();

module.exports = {
    Posts,
    User
};