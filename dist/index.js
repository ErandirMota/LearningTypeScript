"use strict";
let array = [];
for (let i = 1; i <= 5; i++) {
    let userInput = prompt(`Enter the ${i} number:`);
    if (userInput !== null) {
        let number = parseFloat(userInput);
        array.push(number);
    }
}
for (let i = 0; i < array.length; i++) {
    if (array[i] >= 1) {
        array[i] = 1;
    }
    else if (array[i] <= -1) {
        array[i] = -1;
    }
}
console.log(array);
//# sourceMappingURL=index.js.map