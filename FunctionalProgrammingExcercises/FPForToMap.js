import * as commonFunctions from './commonFunctions.js';


const polishAlphabetArray = Array.from('aąbcćdeęfghijklłmnńoóprsśtuwxyzźż');

//Excercise: stwórz sobie array z literami polskiego alfabetu a potem stwórz kod na wszystkie metody for (...)
const createStringWithASCIIForLetter = function(arrayElement) {
    return `ASCII number of ${arrayElement} is ${arrayElement.charCodeAt()}`
}

//for
const addASCIIToLettersAfter5th = function(array) {
    const newArray = [...array];
    for(let i = 5; i < newArray.length; i++) {
        const letterWithASCII = createStringWithASCIIForLetter(array[i]);
        newArray[i] = letterWithASCII;
    }

    return newArray;
}
console.log(addASCIIToLettersAfter5th(polishAlphabetArray));

const polishAlphabetASCIICodesStartWith5thMap = polishAlphabetArray.map((element, index) => {
    if(index < 5) {
        return element;
    }
    return element = createStringWithASCIIForLetter(element);
});
console.log(polishAlphabetASCIICodesStartWith5thMap);

//for...in
const addASCIIToLettersForIn = function(array) {
    const newArray = [];
    for(let index in array) {
        const letterWithASCII = createStringWithASCIIForLetter(array[index]);
        newArray[index] = letterWithASCII;
    };

    return newArray;
};
console.log(addASCIIToLettersForIn(polishAlphabetArray));

//for...of 
const addASCIIToLettersForOf = function(array) {
    const newArray = [];
    for(let value in array) {
        const letterWithASCII = createStringWithASCIIForLetter(value);
        newArray.push(letterWithASCII);
    };

    return newArray;
};
console.log(addASCIIToLettersForOf(polishAlphabetArray));

const polishAlphabetASCIICodesMap = polishAlphabetArray.map(element => element = createStringWithASCIIForLetter(element));
console.log(polishAlphabetASCIICodesMap);
