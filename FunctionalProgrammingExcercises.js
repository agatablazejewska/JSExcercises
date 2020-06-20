import * as commonFunctions from './commonFunctions.js';

// Excercise 1
const calculateAge = function(birthYear) {
    birthYear = parseInt(birthYear);
    commonFunctions.validateNumber(birthYear);

    const today = new Date();
    return today.getFullYear() - birthYear;
};

console.log(calculateAge(1996));

// Excercise 2
const canBuildRightAngledTraingle = function(sideA, sideB, sideC) {
    commonFunctions.validateNumber(sideA);
    commonFunctions.validateNumber(sideB);
    commonFunctions.validateNumber(sideC);

    const sideASquared = Math.pow(sideA, 2);
    const sideBSquared = Math.pow(sideB, 2);
    const sideCSquared = Math.pow(sideC, 2);

    return sideASquared + sideBSquared === sideCSquared
        || sideASquared + sideCSquared === sideBSquared
        || sideBSquared + sideCSquared === sideASquared;
}
console.log(canBuildRightAngledTraingle(3, 4, 5));
console.log(canBuildRightAngledTraingle(3, 5, 5));

// Excercise 3
const arrayRandomValues = Array.from({length: 10}, () => Math.floor(Math.random() * 100));
console.log(arrayRandomValues);

// Excercise 4
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

// Excercise 5 with some higher difficulty level
const wordsArray = ['anticipate', 'Done', 'Layer', 'paper', 'McDonalds', 'guinea pig', 
'vitamins', 'piano', 'Mirror', 'tackle', 'it doesn\'t float my boat', 'busy bee',
'Emerge', 'xenotransplantation', 'Emerge'];

const constainsWordPhrase = function(array, phrase, caseSenstive = true) {
    commonFunctions.validateArrayType(array);
    commonFunctions.validateString(phrase);
    commonFunctions.validateBoolean(caseSenstive);

    phrase = caseSenstive ? phrase : phrase.toLowerCase();
    
    const arrayWithObjectsWithAllNeccessaryData = array.map((element, index) => {
        const dataElement = { 
                 value: element,
                 index: index,
        };
        if(!caseSenstive) {
             dataElement.lowerCaseValue = element.toLowerCase();
        }
        return dataElement;
    });

    const arrayWithObjectsContainingPhrase = arrayWithObjectsWithAllNeccessaryData.filter(element => {
        if(!caseSenstive) {
             return element.lowerCaseValue === phrase;
        } 
        
        return element.value === phrase;
    });

    const writeOutResultInfo = function() {
        if(arrayWithObjectsContainingPhrase?.length) {
            let message = `The phrase has been found. Here are some details:`;
            for(let elem of arrayWithObjectsContainingPhrase) {
                message += `
                - value: ${elem.value}, index: ${elem.index}`;
            }
            return message;
        }

        return 'This phrase or word hasn\'t been found in the provided array';
    };

    return writeOutResultInfo();
};

const containsDoneString = constainsWordPhrase(wordsArray, 'emerge', false);
console.log(containsDoneString);

// Excercise 6
const numbers = [2, 5, 7, 10, 34, 16, 879, 1]
const filterByEvenNumbers = function(array) {
    const arrayEvenNumbers = [];

    for(let elem of array) {
        if(elem %2 === 0) {
            arrayEvenNumbers.push(elem);
        }
    }

    return arrayEvenNumbers;
}

const arrayEvenNumbers = filterByEvenNumbers(numbers);
console.log(arrayEvenNumbers);





//Functional Programming excercises
const polishAlphabetArray = Array.from('aąbcćdeęfghijklłmnńoóprsśtuwxyzźż');



// Excercise: korzystając z funkcji .reduce stwórz agregację liter alfabetu (...)
const randomIntFromInterval = function(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const findIndexToStopAt = function(currentIndex) {
    const howManyItems = randomIntFromInterval(4, 7);
    const indexToStopAt = currentIndex + howManyItems;

    return indexToStopAt;
}

const createArrayOfArraysCallback = function(acc, element, index, array) {
    if(index < acc.lastUsedIndexOrinigalArray) {
        return acc;
    }
    
    const originalArrayIndexToStopAt = findIndexToStopAt(index);
    const subArray = array.slice(index, originalArrayIndexToStopAt);
    acc.arrayOfArrays.push(subArray);

    acc.lastUsedIndexOrinigalArray = originalArrayIndexToStopAt;

    return acc;
}

const createArrayOfArrays = function(array) {
    const objWithArrayInside = array.reduce(createArrayOfArraysCallback, { arrayOfArrays: [], lastUsedIndexOrinigalArray: -1 });

    return objWithArrayInside.arrayOfArrays;
} 

const polishAlphabetArrayOfArrays = createArrayOfArrays(polishAlphabetArray);
console.log(polishAlphabetArrayOfArrays);

