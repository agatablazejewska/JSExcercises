import * as commonFunctions from './commonFunctions.js';

// Excercise 1
const calculateAge = function(birthYear) {
    birthYear = parseInt(birthYear);
    commonFunctions.validateNumber(birthYear);

    const today = new Date();
    return today.getFullYear() - birthYear;
};

console.log(calculateAge(1996));

//Functional Programming excercises
const polishAlphabetArray = Array.from('aąbcćdeęfghijklłmnńoóprsśtuwxyzźż');



//Excercise:korzystając z funkcji .filter stwórz funkcję filterWith(arr, filter) filtrowanie arraya z obiektami po stringu (...)
function Person(name, age, animal) {
    this.name = name;
    this.age = age;
    this.animal = animal;
}

const personsArray = [
    new Person('Kait', 23, 'cat'), 
    new Person('Marcus', 19, 'dog'), 
    new Person('Merry', 10, 'hamster'), 
    new Person('Gregory', 36, 'dolphin'), 
    new Person('Savannah', 53, 'guinea pig'), 
    new Person('Elise', 74, 'chinchilla'),
    new Person('Mick', 29, 'cat')
];

const filterWith = function(arr, filter) {
    const filterLength = filter.length;
    let filteredArray = [];

    if(filterLength === 0) {
       return filteredArray = arr.filter(element => element.age > 30);
    }

    if(filterLength <= 3) {
        return arr;
    }

    if(filterLength > 3) {
        return filteredArray = arr.filter(element => element.name.startsWith('M') 
            && element.age > 25 
            && element.animal === 'cat');
    }
}

const filterWholeArray = filterWith(personsArray, '');
const filterNothing = filterWith(personsArray, 'no');
const filterByObjectsKeys = filterWith(personsArray, 'keys');
console.log(filterNothing);
console.log(filterWholeArray);
console.log(filterByObjectsKeys);
