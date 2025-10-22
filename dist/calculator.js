"use strict";
// calculator project in ts
Object.defineProperty(exports, "__esModule", { value: true });
function add(a, b) {
    return a + b;
}
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
function division(a, b) {
    if (b === 0) {
        // console.log('Cannot divide by zero');
        throw new Error('Cannot divide by zero');
    }
    return a / b;
}
function power(base, exponent = 2) {
    return Math.pow(base, exponent);
}
function calculte(operation, a, b = 1) {
    switch (operation) {
        case "+": return add(a, b);
        case "-": return sub(a, b);
        case "*": return mul(a, b);
        case "/": return division(a, b);
        case "^": return power(a, b);
        default: throw new Error("Invalid Operation");
    }
}
console.log("Add:", calculte("+", 4, 3));
