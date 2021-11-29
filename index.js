function add(num1, num2) {
    return num1 + num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function calculator(num1, num2, operator) {
    return operator(num1, num2);
}


console.log(calculator(3, 4, add)); // return 7
console.log(calculator(3, 4, divide)); // return 0.75
console.log(calculator(3, 4, multiply)); // return 12
console.log(calculator(3, 4, subtract)); // return -1