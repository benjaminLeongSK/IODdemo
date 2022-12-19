fruits = ["apple", "banana", "orange", "melon", "kiwi", "pineapple"];

// for loop
// for (let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }

// while loop
// let j = 0;
// while(j < fruits.length) {
//     console.log(fruits[j]);
//     j++
// }

// let k = 0

//do while loop
// do {
//     console.log(fruits[k]);
//     k++;
// } while(k < fruits.length);


const myArr = ['sweet', 'salty', 'bitter', 'sour'];
myArr.push('stinky');
console.log(myArr);
myArr.pop();
console.log(myArr);
myArr.shift();
console.log(myArr);
myArr.unshift('smelly');
console.log(myArr);

const newArr = myArr;
newArr.push('WillyWonka');
console.log(newArr, myArr);