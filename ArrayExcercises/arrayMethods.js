// Treść zadania #6 - metody wbudowane w Array
// z uwagi na to, że JS jest jezykiem funkcyjnym warto opanować jego podstawowe metody

// .map
// .filter
// .reduce
// .reduceRight
// .every
// .some
// .entries

// Stwórz funkcje, które będą działać identycznie co metody wbudowane
// ale będą działać przy pomocy pętli for lub while
import * as commonFunctions from './commonFunctions.js';

const sampleArray = [1,2,3,4,5,6,7,8,9,10,11,12];


function mapFn(array, callback) {
    commonFunctions.validate(array, callback)
    const newArray = [];

    for(let index in array) {
        newArray[index] = callback(array[index], index, array);
    }

    return newArray;
} 

const sampleArraySquaredValues = mapFn(sampleArray, element => Math.pow(element, 2));
console.log(sampleArray);
console.log(sampleArraySquaredValues); 


function filterFn(array, callback) {
    commonFunctions.validate(array, callback)
    const filteredArray = [];

    for(let index in array) {
        const currentElement = array[index];

        if(callback(currentElement, index, array)) {
            filteredArray.push(currentElement);
        }
    }

    return filteredArray;
}

const arrayWithOddNumbers = filterFn(sampleArray, element => element % 2 !== 0);
console.log(arrayWithOddNumbers);

function reduceFn(array, callback, initial) {
   commonFunctions.validate(array, callback)
   let currentResult = initial || array[0]; 

    for(let index of array.keys()) {
        if(!initial && index === 0){
            continue;
        }

        currentResult = callback(currentResult, array[index], index, array);
    }

    return currentResult;
}

const sampleArraySum = reduceFn(sampleArray, (acc, currentValue) => acc + currentValue);
console.log(sampleArraySum);

const nestedArray = [[0, 1], [2, 3], [4, 5]];

const flattened = reduceFn(nestedArray, function(a, b) {
    return a.concat(b);
  });
console.log(flattened);

function reduceRightFn(array, callback, initial) {
    commonFunctions.validate(array, callback)
    array.reverse();
    return reduceFn(array, callback, initial);
}

const flattenedBackwards = reduceRightFn(nestedArray, (accumulator, currentValue) => accumulator.concat(currentValue));
console.log(flattenedBackwards);

function everyFn(array, callback) {
    commonFunctions.validate(array, callback)
    for(let index in array) {
        if(!callback(array[index], index, array)){
            return false;
        }
    }

    return true;
}

const isEveryElementTypeOfNumber = everyFn(sampleArray, element => typeof element === "number");
console.log(isEveryElementTypeOfNumber);

function someFn(array, callback) { 
    commonFunctions.validate(array, callback)
    for(let index in array) {
        if(callback(array[index])){
            return true;
        }
    }

    return false;
}

const isAnyElementBiggerThan5 = someFn(sampleArray, element => element > 5);
console.log(isAnyElementBiggerThan5);

function entriesFn(array) {
    commonFunctions.validateArrayType(array);

    function next() {
        this.index++;
        return this.index >= this.arr.length 
        ? { value: undefined, done: true }
        : { value: [this.index, this.arr[this.index]], done: false}
    };

    const iterator = {
        index: -1,
        arr: array,
    }
    iterator.next = next.bind(iterator);
    iterator[Symbol.iterator] = () => {
        return { next: next.bind(iterator)}
    };
    
    return iterator;
};
 
const iterator = entriesFn(sampleArray);
console.log(iterator.next())

for (let i of iterator) {
    console.log(i);
}