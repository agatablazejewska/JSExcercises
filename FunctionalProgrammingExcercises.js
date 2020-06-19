import * as commonFunctions from './commonFunctions.js';

const calculateAge = function(birthYear) {
    birthYear = parseInt(birthYear);
    commonFunctions.validateNumber(birthYear);

    const today = new Date();
    return today.getFullYear() - birthYear;
};

console.log(calculateAge(1996));

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


