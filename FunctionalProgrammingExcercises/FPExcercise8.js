import * as commonFunctions from '../commonFunctions.js';
import * as dataArrays from './FPExcercise8Data.js';
import { randomIntFromInterval } from './AggregateAlphabetLettersExcercise.js';

const takeRandomNameOrSurname = function(array) {
    commonFunctions.validateArrayType(array);

    const randomIndex = randomIntFromInterval(0, 39);
    return array[randomIndex];
}

const takeRandomCountry = function() {
    const randomIndex = randomIntFromInterval(0, 2);
    return dataArrays.countries[randomIndex];
}

const generateRandomAge = function() {
    return randomIntFromInterval(18, 85);
}

const generatePhoneNumber = function() {
    return Array.from({length: 9}, () => randomIntFromInterval(0, 9)).join('');
}

const generateHuman = function() {
    return {
        name: takeRandomNameOrSurname(dataArrays.firstNames),
        surname: takeRandomNameOrSurname(dataArrays.surnames),
        age: generateRandomAge(),
        get email() {
            `${this.name}${this.surname}@gmail.com`
        },
        country: takeRandomCountry(),
        phoneNr: generatePhoneNumber(),
    };
}


console.log(generateHuman());