let array: number[] = [];

for (let i: number = 1; i <= 5; i++) {
  let userInput: string | null = prompt(`Enter the ${i} number:`);
  if (userInput !== null) {
    let number: number = parseFloat(userInput);
    array.push(number);
  }
}

for (let i: number = 0; i < array.length; i++) {
  if (array[i] >= 1) {
    array[i] = 1;
  } else if (array[i] <= -1) {
    array[i] = -1;
  }
}

console.log(array);