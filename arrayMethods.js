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

const sampleArray = [1,2,3,4,5,6,7,8,9,10,11,12];


function mapFn(array, callback) {
    const newArray = [...array]; //this will only work with arrays that aren't nested (shallow copy)

    for(let i = 0; i < newArray.length; i++) {
        newArray[i] = callback(newArray[i]);
    }

    return newArray;
} 

const sampleArraySquaredValues = mapFn(sampleArray, element => Math.pow(element, 2));
console.log(sampleArray);
console.log(sampleArraySquaredValues); 


function filterFn(array, callback) {
    const newArray = [...array];
    const filteredArray = [];

    for(let i = 0; i < newArray.length; i++) {
        const currentElement = newArray[i];

        if(callback(currentElement)) {
            filteredArray.push(currentElement);
        }
    }

    return filteredArray;
}

const arrayWithOddNumbers = filterFn(sampleArray, element => element % 2 !== 0);
console.log(arrayWithOddNumbers);

function reduceFn(array, callback, initial){}

function reduceRightFn(array, callback, initial){}

function everyFn(array, callback) {
    const newArray = [...array];

    for(let i = 0; i < newArray.length; i++) {
        if(!callback(newArray[i])){
            return false;
        }
    }

    return true;
}

const isEveryElementTypeOfNumber = everyFn(sampleArray, element => typeof element === "number");
console.log(isEveryElementTypeOfNumber);

function someFn(array, callback) { 
    const newArray = [...array];

    for(let i = 0; i < newArray.length; i++) {
        if(callback(newArray[i])){
            return true;
        }
    }

    return false;
}

const isAnyElementBiggerThan5 = someFn(sampleArray, element => element > 5);
console.log(isAnyElementBiggerThan5);

function entriesFn(array) {
    const iterator = {
        index: -1,
        arr: array,
        next() {
            this.index++;
            return this.index >= this.arr.length 
            ? { value: undefined, done: true }
            : { value: [this.index, this.arr[this.index]], done: false}
        },
    
        [Symbol.iterator]() {
            let index = -1;
            const arr = this.arr;
    
            return {
                next() {
                    index++;
                    return index >= arr.length 
                    ? { value: undefined, done: true } 
                    : {value: [index, arr[index]], done: false };
                }
            }
        }
    }
    return iterator;
};
 
iterator = entriesFn(sampleArray);
console.log(iterator.next())

for (let e of iterator) {
    console.log(e);
  }