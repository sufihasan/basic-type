"use strict";
// optional parameter
Object.defineProperty(exports, "__esModule", { value: true });
function studentInfo(sName, sAge, sStatus) {
    return `${sName} age is ${sAge} and status ${sStatus ? sStatus : 'Unemployed'}`;
}
console.log(studentInfo('Saleh', 33, 'Doctor'));
console.log(studentInfo('maleka', 22));
//# sourceMappingURL=optionalAndDefaultParameter.js.map