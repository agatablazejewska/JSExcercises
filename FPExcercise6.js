import * as commonFunctions from './commonFunctions.js';

const numbers = [2, 5, 7, 10, 34, 16, 879, 1]
const filterByEvenNumbers = function(array) {
    return array.filter(element => element %2 === 0);
}

const arrayEvenNumbers = filterByEvenNumbers(numbers);
console.log(arrayEvenNumbers);
