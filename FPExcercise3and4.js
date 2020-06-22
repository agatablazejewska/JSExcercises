import * as commonFunctions from './commonFunctions.js';

// Excercise 3
const arrayRandomValues = function(length) {
    return Array.from({length: length}, () => Math.floor(Math.random() * 100)); 
}

// Excercise 4
const createArray10ArraysWithin = function() {
    const basicArray = Array.from({length: 10});
    const arrayWithArraysInside = basicArray.map(element =>  element = arrayRandomValues(10));

    return arrayWithArraysInside;
}

const nestedArray = createArray10ArraysWithin(10);
console.log(nestedArray);
