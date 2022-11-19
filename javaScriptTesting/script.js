let myArr = ['one', 'two', 'three', 'four', 'five'];

myArr.push("six");
myArr.push(myArr.shift());
console.log(myArr, myArr.length);

const Book = {
    "title" : "How to be a PokeMaster",
    "Description" : "Step by step Guide to be the very best",
    "Author" : "Ash Ketchum",
    "Total pages" : 2022
};
console.log(Book);

function sum(a,b){
    return a - b
};

if(sum(2,4)!=6){console.log('error')};
if(sum(2,4)==6){console.log('correct')};
