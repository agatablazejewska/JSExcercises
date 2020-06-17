// za pomocą metody .reduce wbudowanej w array 
// odtwórz działanie innych metod:

// - array.some
// - array.every
// - array.filter
// - array.map

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const someFromReduce = function(array, callback) {
    return array.reduce((acc, element) =>  acc || callback(element), false);
};

const everyFromReduce = function(array, callback) {
    return array.reduce((acc, element) =>  acc && callback(element), true);
};


const someElements = someFromReduce(array, element => element === 7);
console.log(someElements);


const everyElement = everyFromReduce(array, element => typeof element === "number");
 console.log(everyElement);