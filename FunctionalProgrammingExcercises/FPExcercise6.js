import * as commonFunctions from '../commonFunctions.js';

export const filterByEvenNumbers = function(array) {
    commonFunctions.validateArrayType(array);
    if(array.length === 0) {
        throw new Error(`Provided array is empty.`);
    }

    return array.filter(element => element %2 === 0);
}
