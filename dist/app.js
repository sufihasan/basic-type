"use strict";
// sudent profile project with ts
// const student1 = {
//     name: 'Hasan',
//     age: 27,
//     isEnroll: true,
//     courses: ['javaScript', 'typeScript', 'redux toolkit'],
//     score: [88, 92, 95],
//     info: ["Mamun", 23, true]
// }
Object.defineProperty(exports, "__esModule", { value: true });
const student1 = {
    name: 'Hasan',
    age: 27,
    isEnroll: true,
    courses: ['javaScript', 'typeScript', 'redux toolkit'],
    score: [88, 92, 95],
    info: ["Mamun", 23, true]
};
const student2 = {
    name: 'kamal',
    age: 22,
    isEnroll: false,
    courses: ['bangla', 'english', 'math'],
    score: [33, 55, 77],
    info: ['Kamal', 22, true]
};
function displayStudent(student) {
    console.log(`Name: ${student.name}`);
    console.log(`Age: ${student.age}`);
    console.log(`Courses: ${student.courses.join(',')}`);
}
displayStudent(student1);
//# sourceMappingURL=app.js.map