"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// any
let randomValue = 'Hello';
randomValue = 20;
randomValue = true;
// unknown
let value = 'my name';
value = 30;
value = true;
value = 'kasem';
if (typeof value === 'string') {
    console.log(value.toUpperCase());
}
function printMessage() {
    console.log('well and done');
}
console.log(printMessage());
function friendName(fNmae) {
    return `my friend name is ${fNmae}`;
}
const result = friendName('kamal');
console.log(result);
//# sourceMappingURL=app.js.map