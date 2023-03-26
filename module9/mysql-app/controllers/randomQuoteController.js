
"use strict";

var axios = require("axios");

const getRandomQuote = (data,res) => {

    axios.get('https://api.fisenko.net/v1/quotes/en/random')
        .then((response) => {
          if (response) {
            res.send({result: 200 , data: response.data})
          }
        })
        .catch((error) => {
          throw error
        })
}

module.exports = {
    getRandomQuote
}