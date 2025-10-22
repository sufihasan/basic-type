"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// object type
const studentInfo = {
    name: 'Hasan',
    age: 22
};
function printUser(user) {
    console.log(`${user.name} and ${user.age}`);
}
printUser(studentInfo);
function showUser(user) {
    console.log(`${user.name} and ${user.age}`);
}
const user1 = { name: 'asif', age: 25 };
showUser(user1);
const product1 = {
    id: 1,
    name: 'kamrul',
    price: 30,
    // descriptionh: 'it is good product'   // beacuse descrioption is optional
};
const product2 = {
    id: 2,
    name: 'kamrul',
    price: 40,
    descriptionh: 'love this poroduct'
};
