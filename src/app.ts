// sudent profile project with ts
// const student1 = {
//     name: 'Hasan',
//     age: 27,
//     isEnroll: true,
//     courses: ['javaScript', 'typeScript', 'redux toolkit'],
//     score: [88, 92, 95],
//     info: ["Mamun", 23, true]
// }


// type Alias

type Student = {
    name: string,
    age: number,
    isEnroll: boolean,
    courses: string[],
    score: number[],
    info: [string, number, boolean]
}

const student1: Student = {
    name: 'Hasan',
    age: 27,
    isEnroll: true,
    courses: ['javaScript', 'typeScript', 'redux toolkit'],
    score: [88, 92, 95],
    info: ["Mamun", 23, true]
}

const student2: Student = {
    name: 'kamal',
    age: 22,
    isEnroll: false,
    courses: ['bangla', 'english', 'math'],
    score: [33, 55, 77],
    info: ['Kamal', 22, true]
}

function displayStudent(student: Student): void {
    console.log(`Name: ${student.name}`);
    console.log(`Age: ${student.age}`);
    console.log(`Courses: ${student.courses.join(',')}`);
}

displayStudent(student1);

