document.getElementById("btn").addEventListener("click", calculate)
let costEl = document.getElementById("cost-el")

const food = document.getElementById("food-select");
const transport = document.getElementById("transport-select");
 

function calculate() {
    // 1. Write the JavaScript to calculate the total cost of the selected options from the form.
    // 2. Display the total cost in the cost-el span.
    costEl.textContent = parseInt(food.value) + parseInt(transport.value);
}
 