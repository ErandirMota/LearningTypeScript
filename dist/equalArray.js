"use strict";
let arrayA = [];
let arrayB = [];
let arrayC = [];
let continuee = true;
while (continuee) {
    let userInputA = prompt("Enter a positive integer number for array A:");
    let numberA = parseInt(userInputA);
    if (numberA <= 0 || isNaN(numberA)) {
        continuee = false;
    }
    else {
        arrayA.push(numberA);
    }
}
continuee = true;
while (continuee) {
    let userInputB = prompt("Enter a positive integer number for array B:");
    let numberB = parseInt(userInputB);
    if (numberB <= 0 || isNaN(numberB)) {
        continuee = false;
    }
    else {
        arrayB.push(numberB);
    }
}
for (let i = 0; i < arrayA.length; i++) {
    if (arrayB.includes(arrayA[i]) || arrayA[i] % 2 !== 0) {
        arrayC.push(arrayA[i]);
    }
}
console.log("Array A:", arrayA);
console.log("Array B:", arrayB);
console.log("Array C:", arrayC);
console.log('----------------------------------------');
let arrayZero = [2, 6, 8, 0, 6, 4, 3, 2, 0, 7];
const arrayWithoutZero = arrayZero.filter((value) => value !== 0);
console.log("Array without number zero:", arrayWithoutZero);
//# sourceMappingURL=equalArray.js.map