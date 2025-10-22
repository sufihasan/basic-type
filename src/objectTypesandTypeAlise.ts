
// object type
const studentInfo = {
    name: 'Hasan',
    age: 22
}

function printUser(user: { name: string, age: number }): void {
    console.log(`${user.name} and ${user.age}`);
}

printUser(studentInfo);

// --------------------------
// type alias
type User = {
    name: string;
    age: number;
}

function showUser(user: User) {
    console.log(`${user.name} and ${user.age}`);
}

const user1 = { name: 'asif', age: 25 }

showUser(user1)


// product type using type alis
type Product = {
    id: number;
    name: string;
    price: number;
    descriptionh?: string; // optinal property
}

const product1: Product = {
    id: 1,
    name: 'kamrul',
    price: 30,
    // descriptionh: 'it is good product'   // beacuse descrioption is optional
}

const product2: Product = {
    id: 2,
    name: 'kamrul',
    price: 40,
    descriptionh: 'love this poroduct'
}

