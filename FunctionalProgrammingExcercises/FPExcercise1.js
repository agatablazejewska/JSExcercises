import * as commonFunctions from '../commonFunctions.js';

const validateBirthYear = function(birthYear) {
    try {
        commonFunctions.validateNumber(birthYear);
    } catch(e) {
        throw new TypeError(`Provided argument is not of type number nor of type date nor of type string.`)
    }

    if(birthYear < 0) {
        throw new Error('Birth year must be a positive value.');
    }
}

function format(birthYear) {
    if (birthYear instanceof Date) {
        birthYear = birthYear.getFullYear();
    } else if(typeof birthYear === 'string') {
        if(!(parseInt(birthYear) && isFinite(birthYear))) {
            throw new Error(`Birth year can't contain any letters.`);
        }

        birthYear = parseInt(birthYear);
    }
    return birthYear;
}

export const calculateAge = function(birthYear) {
    birthYear = format(birthYear);
    validateBirthYear(birthYear);

    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
};




