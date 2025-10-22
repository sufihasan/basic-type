
function add(a: number, b: number, c: number): number {
    return a + b + c
}

console.log(add(10, 30, 88));


function giveSalam(salam: string): void {
    console.log(salam);
}

giveSalam('Assalamu Alikum');

function throwError(): never {
    throw new Error('something went wrong')
}

throwError();