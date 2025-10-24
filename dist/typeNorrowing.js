"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Type narrowing is when TypeScript figures out a more specific type of a variable at a certain point in your code.
function log1(value) {
    if (typeof value === 'string') {
        console.log(value.toUpperCase()); // 'value' is narrowed to 'string'
    }
    else {
        console.log(value.toFixed(2)); // 'value' is narrowed to 'number'
    }
}
log1('No stop');
log1('45.7564646');
function processInput(input) {
    if (typeof input === 'number') {
        console.log(input * 2); // input is narrowed to 'number'
    }
    else {
        console.log(input.trim());
    }
}
processInput(12);
processInput(' abc ');
function handleAction(action) {
    console.log(`Action is : ${action}`);
}
handleAction('push');
