import * as commonFunctions from './commonFunctions.js';

// Excercise 1
const calculateAge = function(birthYear) {
    birthYear = parseInt(birthYear);
    commonFunctions.validateNumber(birthYear);

    const today = new Date();
    return today.getFullYear() - birthYear;
};

console.log(calculateAge(1996));


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

//Excercise:korzystając z funkcji .filter stwórz funkcję filterWith(arr, filter) filtrowanie arraya z obiektami po stringu (...)
function Person(name, age, animal) {
    this.name = name;
    this.age = age;
    this.animal = animal;
}

const personsArray = [
    new Person('Kait', 23, 'cat'), 
    new Person('Marcus', 19, 'dog'), 
    new Person('Merry', 10, 'hamster'), 
    new Person('Gregory', 36, 'dolphin'), 
    new Person('Savannah', 53, 'guinea pig'), 
    new Person('Elise', 74, 'chinchilla'),
    new Person('Mick', 29, 'cat')
];

const filterWith = function(arr, filter) {
    const filterLength = filter.length;
    let filteredArray = [];

    if(filterLength === 0) {
       return filteredArray = arr.filter(element => element.age > 30);
    }

    if(filterLength <= 3) {
        return arr;
    }

    if(filterLength > 3) {
        return filteredArray = arr.filter(element => element.name.startsWith('M') 
            && element.age > 25 
            && element.animal === 'cat');
    }
}

const filterWholeArray = filterWith(personsArray, '');
const filterNothing = filterWith(personsArray, 'no');
const filterByObjectsKeys = filterWith(personsArray, 'keys');
console.log(filterNothing);
console.log(filterWholeArray);
console.log(filterByObjectsKeys);
