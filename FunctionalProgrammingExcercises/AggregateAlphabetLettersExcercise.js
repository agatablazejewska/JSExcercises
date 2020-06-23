import * as commonFunctions from '../commonFunctions.js';


const polishAlphabetArray = Array.from('aąbcćdeęfghijklłmnńoóprsśtuwxyzźż');
// Excercise: korzystając z funkcji .reduce stwórz agregację liter alfabetu (...)
export const randomIntFromInterval = function(min, max) { 
    commonFunctions.isNumberPositive(min);
    commonFunctions.isNumberPositive(max);

    return Math.floor(Math.random() * (max - min + 1) + min);
};

const createArrayOfArrays = function(array) {
    const aggregatedArray = array.reduce((acc, element, index, array) => {
        const howManyElements = randomIntFromInterval(4, 7);
        const arrayPart = array.splice(0, howManyElements);

        acc.push(arrayPart);

        return acc;
    } ,[]);

    return aggregatedArray;
} 

const polishAlphabetArrayOfArrays = createArrayOfArrays(polishAlphabetArray);
console.log(polishAlphabetArrayOfArrays);
