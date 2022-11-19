console.log("Hello World!");

function sum(a,b){
    return a+b;
};

console.log(sum(5,5))

function sub(a,b){
    return a-b;
};

console.log(sub(5,5));

function div(a,b){
    return a/b;
};

console.log(div(5,5));

function mul(a,b){
    return a*b;
};

console.log(mul(5,5));

function Hello(name){
    return console.log("Hello"+ name);
};

Hello(" benjamin yo wassup boioioioi");

var Sentiment = require('sentiment');
var sentiment = new Sentiment();
var results = sentiment.analyze('are people happy with GST.');
console.dir(results);

