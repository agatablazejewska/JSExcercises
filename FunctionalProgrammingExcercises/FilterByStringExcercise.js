//Excercise:korzystając z funkcji .filter stwórz funkcję filterWith(arr, filter) filtrowanie arraya z obiektami po stringu (...)
class Person {
    constructor(name, age, animal) {
    this.name = name;
    this.age = age;
    this.animal = animal;
    }
}

const personsArray = [
    new Person('Kait', 23, 'cat'), 
    new Person('Marcus', 19, 'dog'), 
    new Person('Merry', 10, 'hamster'), 
    new Person('Gregory', 36, 'dolphin'), 
    new Person('Savannah', 53, 'guinea pig'), 
    new Person('Elise', 74, 'chinchilla'),
    new Person('Mick', 29, 'hamster')
];

const valuesContainingPhrase = function(element, filter) {
    return Object.values(element).filter(value => valueContainsString(value, filter));
}

const valueContainsString = function(value, filter) {
    const valueAsString = value.toString();
    return valueAsString.includes(filter);
}


const filterWith = function(arr, filter) {
    const filterLength = filter.length;
    let filteredArray = [];

    if(filterLength === 0) {
       return arr;
    }

    if(filterLength <= 3) {
        return [];
    }

    if(filterLength > 3) {
        return filteredArray = arr.reduce((acc, element) => {
            const valuesContainingPhraseArray = valuesContainingPhrase(element, filter);

            if(valuesContainingPhraseArray.length) {
                acc.push(element);
            }

            return acc;
        }, []);
    }
}

const filterWholeArray = filterWith(personsArray, '');
const filterNothing = filterWith(personsArray, 'no');
const filterByObjectsKeys = filterWith(personsArray, 'ster');
console.log(filterWholeArray);
console.log(filterNothing);
console.log(filterByObjectsKeys);
