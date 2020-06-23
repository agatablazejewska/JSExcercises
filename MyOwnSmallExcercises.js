import * as commonFunctions from './commonFunctions.js';

//Palindrome function
const isPalindrome = function(string) {
    commonFunctions.validateString(string);
    
    const lowerCase = string.toLowerCase();
    const lowerCaseReversed = lowerCase.split('').reverse().join('');

    return lowerCase === lowerCaseReversed;
}

console.log(isPalindrome("Ala"));