import * as commonFunctions from '../commonFunctions.js';

const validateBirthYear = function(birthYear) {
    if(birthYear < 0) {
        throw new Error('Birth year must be a positive value.');
    }

    if(birthYear > new Date().getFullYear()) {
        throw new Error(`Birth year can't be greater than the current year.`);
    }
}

function format(birthYear) {
    if (birthYear instanceof Date && isFinite(birthYear)) {
        birthYear = birthYear.getFullYear();
    } else if(typeof birthYear === 'string') {
        if(!(parseInt(birthYear) && isFinite(birthYear))) {
            throw new Error(`Birth year can't contain any letters.`);
        }

        birthYear = parseInt(birthYear);
    }

    if(typeof birthYear !== 'number' || Number.isNaN(birthYear)) {
        throw new TypeError(`Provided argument is not of type number nor valid date nor of type string.`);
    }

    return birthYear;
}

export const calculateAge = function(birthYear) {
    birthYear = format(birthYear);
    validateBirthYear(birthYear);

    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
};




