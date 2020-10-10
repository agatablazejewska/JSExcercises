import * as commonFunctions from '../commonFunctions.js';

export const containsWordOrPhrase = function(array, phrase) {
    commonFunctions.validateArrayType(array);
    commonFunctions.validateString(phrase);
    if(array.length === 0) {
        throw new Error(`Array is empty and therefore it is impossible to find any phrases.`);
    }

    const arrayWithObjectsContainingPhrase = array.reduce((acc, element, index, array) => {
        const elemIncludesPhrase = element.toLowerCase().includes(phrase.toLowerCase());
    
       if(elemIncludesPhrase) {
         acc.push({ value: element, index: index });
       } 
       
       return acc;
    } , []);

    return arrayWithObjectsContainingPhrase.length
        ? arrayWithObjectsContainingPhrase
        : "There is no such phrase in the provided array";
};
