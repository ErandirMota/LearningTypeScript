let arrayA: number[] = [];
let arrayB: number[] = [];
let arrayC: number[] = [];

let continuee: boolean = true;

while(continuee) {
  let userInputA: string | null = prompt("Enter a positive integer number for array A:");
  let numberA: number = parseInt(userInputA as string);

  if (numberA <= 0 || isNaN(numberA)) {
    continuee = false;
  } else {
    arrayA.push(numberA);
  }
}

continuee = true;

while (continuee) {
  let userInputB: string | null = prompt("Enter a positive integer number for array B:");
  let numberB: number = parseInt(userInputB as string);

  if (numberB <= 0 || isNaN(numberB)) {
    continuee = false;
  } else {
    arrayB.push(numberB);
  }
}

for (let i: number = 0; i < arrayA.length; i++) {
  if (arrayB.includes(arrayA[i]) || arrayA[i] % 2 !== 0) {
    arrayC.push(arrayA[i]);
  }
}

console.log("Array A:", arrayA);
console.log("Array B:", arrayB);
console.log("Array C:", arrayC);