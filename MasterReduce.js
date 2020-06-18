// za pomocą metody .reduce wbudowanej w array 
// odtwórz działanie innych metod:

// - array.some
// - array.every
// - array.filter
// - array.map
import * as commonFunctions from './commonFunctions.js';

const someFromReduce = function(array, callback) {
    commonFunctions.validate(array, callback)
    return array.reduce((acc, element) =>  acc || callback(element), false);
};

const everyFromReduce = function(array, callback) {
    commonFunctions.validate(array, callback)
    return array.reduce((acc, element) =>  acc && callback(element), true);
};

const filterFromReduce = function(array, callback) {
    commonFunctions.validate(array, callback)
    return array.reduce((acc, element) => {
        if(callback(element)) {
            acc.push(element);
        }

        return acc;
    } ,[]);
};

const mapFromReduce = function(array, callback) {
    commonFunctions.validate(array, callback)
    return array.reduce((acc, element) => {
        acc.push(callback(element))

        return acc;
    }, []);
};

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const someElementsHaveValue7 = someFromReduce(array, element => element === 7);
console.log(someElementsHaveValue7);

const everyElementIsNumber = everyFromReduce(array, element => typeof element === "number");
console.log(everyElementIsNumber);

const filteredEvenNumbers = filterFromReduce(array, element => element %2 === 0);
console.log(filteredEvenNumbers);

const mapNumbersSquaredValues = mapFromReduce(array, element => Math.pow(element, 2));
console.log(mapNumbersSquaredValues);
