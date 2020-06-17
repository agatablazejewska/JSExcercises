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

const sampleArray = [1,2,3,4,5,6,7,8,9,10];


function mapFn(array, callback) {
    let newArray = [...array]; //this will only work with arrays that aren't nested (shallow copy)

    for(let i = 0; i < newArray.length; i++) {
        newArray[i] = callback(newArray[i]);
    }
    
    return newArray;
} 

const sampleArraySquaredValues = mapFn(sampleArray, element => Math.pow(element, 2));
console.log(sampleArray);
console.log(sampleArraySquaredValues); 

function filterFn(array, callback){}

function reduceFn(array, callback, initial){}

function reduceRightFn(array, callback, initial){}

function everyFn(array, callback){}

function someFn(array, callback){}

function entriesFn(array){}