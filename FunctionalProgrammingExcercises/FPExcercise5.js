import * as commonFunctions from './commonFunctions.js';

const wordsArray = ['anticipate', 'Done', 'Layer', 'paper', 'McDonalds', 'guinea pig', 
'vitamins', 'piano', 'Mirror', 'tackle', 'it doesn\'t float my boat', 'busy bee',
'Emerge', 'xenotransplantation', 'Emerge'];

const constainsWordPhrase = function(array, phrase, caseSensitive = false) {
    commonFunctions.validateArrayType(array);
    commonFunctions.validateString(phrase);
    commonFunctions.validateBoolean(caseSensitive);

    const phraseConsideringCaseSensitivity = caseSensitive ? phrase : phrase.toLowerCase();

    const arrayWithObjectsContainingPhrase = array.reduce((acc, element, index, array) => {
        const elemIncludesPhrase = caseSensitive 
        ? element.includes(phraseConsideringCaseSensitivity) 
        : element.toLowerCase().includes(phraseConsideringCaseSensitivity);
    
       if(elemIncludesPhrase) {
         acc.push({ value: element, index: index });
       } 
       
       return acc;
    } , []);

    return arrayWithObjectsContainingPhrase.length ? arrayWithObjectsContainingPhrase : "There is no such phrase in the provided array";
};

const containsDoneString = constainsWordPhrase(wordsArray, 'ta');
console.log(containsDoneString);
