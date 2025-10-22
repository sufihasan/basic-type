// optional parameter

function studentInfo(sName: string, sAge: number, sStatus?: string): string {
    return `${sName} age is ${sAge} and status ${sStatus ? sStatus : 'Unemployed'}`;
}

console.log(studentInfo('Saleh', 33, 'Doctor'));
console.log(studentInfo('maleka', 22,));
