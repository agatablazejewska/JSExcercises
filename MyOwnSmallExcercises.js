import * as commonFunctions from './commonFunctions.js';

//Palindrome function
const isPalindrome = function(string) {
    commonFunctions.validateString(string);
    
    const lowerCase = string.toLowerCase();
    let lowerCaseArray = lowerCase.split('');

    const lowerCaseReversed = lowerCaseArray.reverse().join('');

    return lowerCase === lowerCaseReversed;
}

console.log(isPalindrome("Ala"));