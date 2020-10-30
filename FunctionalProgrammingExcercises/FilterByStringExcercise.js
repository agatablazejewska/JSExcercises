import * as commonFunctions from '../commonFunctions';
//Excercise:korzystając z funkcji .filter stwórz funkcję filterWith(arr, filter) filtrowanie arraya z obiektami po stringu (...)
export const filterWith = function(arr, filter) {
    _validateFilter(filter);

    const filterLength = filter.length;
    if(filterLength <= 2) {
        return [];
    }
    else {
        return getFilteredArray(arr, filter);
    }
}

export function getFilteredArray(array, filter) {
    return array.reduce((acc, element) => {
        if (containsFilter(element, filter)) {
            acc.push(element);
        }

        return acc;
    }, []);
}

export const containsFilter = function(element, filter) {
    _validateElement(element);

    _lookForFilterIfArrayOrObject(element, filter);

    filter = filter.toString().toLowerCase();
    const valueAsString = element.toString().toLowerCase();
    return valueAsString.includes(filter);
}

const _lookForFilterIfArrayOrObject = function(element, filter) {
    if(Array.isArray(element)) {
        return element.filter(value => containsFilter(value, filter)).length !== 0;
    } else if (typeof element === 'object' && element !== null) {
        return Object.values(element).filter(value => containsFilter(value, filter)).length !== 0;
    }
}

const _validateFilter = function(filter) {
    const isNotNumberOrString = (!is.number(filter) || is.NaN(filter)) && !is.string(filter);

    if(isNotNumberOrString) {
        throw new TypeError(`Provided filter is not a string neither a number.`);
    }
}

const _validateElement = function(element) {
    const isNotArrayObjectStringOrNumber = !Array.isArray(element) && !is.object(element) && !is.string(element)
        && !is.number(element);

    if(isNotArrayObjectStringOrNumber || is.null(element)) {
        throw new TypeError(`Element is not a number, string, array, object or is null.`);
    }
}