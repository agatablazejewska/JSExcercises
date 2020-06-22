import * as commonFunctions from './commonFunctions.js';

// Excercise 1
const calculateAge = function(birthYear) {
    birthYear = parseInt(birthYear);
    commonFunctions.validateNumber(birthYear);

    const today = new Date();
    return today.getFullYear() - birthYear;
};

console.log(calculateAge(1996));

//Functional Programming excercises
const polishAlphabetArray = Array.from('aąbcćdeęfghijklłmnńoóprsśtuwxyzźż');



