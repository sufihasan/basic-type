
// calculator project in ts

function add(a: number, b: number): number {
    return a + b;
}

const sub = (a: number, b: number): number => a - b;
const mul = (a: number, b: number): number => a * b;

function division(a: number, b: number): number {
    if (b === 0) {
        // console.log('Cannot divide by zero');
        throw new Error('Cannot divide by zero');

    }
    return a / b;
}

function power(base: number, exponent: number = 2): number {
    return Math.pow(base, exponent);
}

function calculte(operation: string, a: number, b: number = 1): number {
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

