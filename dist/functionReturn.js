"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(a, b, c) {
    return a + b + c;
}
console.log(add(10, 30, 88));
function giveSalam(salam) {
    console.log(salam);
}
giveSalam('Assalamu Alikum');
function throwError() {
    throw new Error('something went wrong');
}
throwError();
