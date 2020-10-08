import * as commonFunctions from '../commonFunctions.js';

const validateBirthYear = function(birthYear) {
    commonFunctions.validateNumber(birthYear);
    if(birthYear < 0) {
        throw new Error('Birth year must be a positive value.');
    }
}

export const calculateAge = function(birthYear) {
    birthYear = parseInt(birthYear);
    validateBirthYear(birthYear);

    const today = new Date();
    return today.getFullYear() - birthYear;
};




