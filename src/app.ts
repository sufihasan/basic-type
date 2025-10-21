
// any
let randomValue: any = 'Hello';

randomValue = 20;

randomValue = true;

// unknown

let value: unknown = 'my name';

value = 30;
value = true;
value = 'kasem';

if (typeof value === 'string') {
    console.log(value.toUpperCase());
}

function printMessage(): void {
    console.log('well and done');
}

console.log(printMessage());


function friendName(fNmae: string): string {
    return `my friend name is ${fNmae}`;
}

const result = friendName('kamal');
console.log(result);


//null and undefined
let nothings: null = null;
let noValue: undefined = undefined;




