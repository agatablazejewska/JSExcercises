import * as commonFunctions from '../commonFunctions.js';

export const containsWordOrPhrase = function(array, phrase, caseSensitive = false) {
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

    return arrayWithObjectsContainingPhrase.length
        ? arrayWithObjectsContainingPhrase
        : "There is no such phrase in the provided array";
};
