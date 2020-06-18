import * as commonFunctions from './commonFunctions.js';

const calculateAge = function(birthYear) {
    birthYear = parseInt(birthYear);
    commonFunctions.validateNumber(birthYear);

    const today = new Date();
    return today.getFullYear() - birthYear;
};

console.log(calculateAge(1996));

const canBuildRightAngledTraingle = function(sideA, sideB, sideC) {
    const sideASquared = Math.pow(sideA, 2);
    const sideBSquared = Math.pow(sideB, 2);
    const sideCSquared = Math.pow(sideC, 2);

    return sideASquared + sideBSquared === sideCSquared
        || sideASquared + sideCSquared === sideBSquared
        || sideBSquared + sideCSquared === sideASquared;
}


const arrayRandomValues = Array.from({length: 10}, () => Math.floor(Math.random() * 100));
console.log(arrayRandomValues);

const createArrayWithCoupleArraysWithin = function(howManyArrays) {
    howManyArrays = parseInt(howManyArrays);
    commonFunctions.validateNumber(howManyArrays);

    const primaryArray = [];
    for(let i = 0; i < howManyArrays; i++) {
        const newArray = Array.from({length: 10}, () => Math.floor(Math.random() * 100));
        primaryArray.push(newArray);
    }

    return primaryArray;
}

const nestedArray = createArrayWithCoupleArraysWithin(10);
console.log(nestedArray);