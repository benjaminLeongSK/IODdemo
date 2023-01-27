const counter = document.getElementById("counter")
const addButton = document.getElementById("add-button")
const subButton = document.getElementById("subtract-button")
let count = counter.innerText;

const increase = () => {
    count++;
    counter.innerText = count;
}

const decrease = () => {
    count--;
    counter.innerText = count;
}

addButton.addEventListener("click", increase);
subButton.addEventListener("click", decrease);