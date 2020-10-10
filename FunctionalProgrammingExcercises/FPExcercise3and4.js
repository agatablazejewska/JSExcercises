import * as commonFunctions from '../commonFunctions.js';

// Excercise 3
export const arrayRandomValues = function(length) {
    commonFunctions.validateNumber(length);
    if(length < 0) {
        throw new Error("Array length can't be less than 0.");
    }
    
    return Array.from({length: length}, () => Math.floor(Math.random() * 100)); 
}

// Excercise 4
export const createArray10ArraysWithin = function() {
    const basicArray = Array.from({length: 10});
    const arrayWithArraysInside = basicArray.map(() => arrayRandomValues(10));

    return arrayWithArraysInside;
}

const nestedArray = createArray10ArraysWithin(10);
console.log(nestedArray);
