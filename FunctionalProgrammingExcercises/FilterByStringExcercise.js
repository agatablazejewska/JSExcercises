import is from 'is_js';
import * as commonFunctions from '../commonFunctions';

//Excercise:korzystając z funkcji .filter stwórz funkcję filterWith(arr, filter) filtrowanie arraya z obiektami po stringu (...)
export const filterWith = function(arr, filter) {
    commonFunctions.validateArrayType(arr);
    _validateFilter(filter);

    const filterLength = filter.length;
    if(filterLength <= 2) {
        return [];
    }
    else {
        return _getFilteredArray(arr, filter);
    }
}

const _getFilteredArray = function(array, filter) {
    return array.reduce((acc, element) => {
        if (containsFilter(element, filter)) {
            acc.push(element);
        }

        return acc;
    }, []);
}

export const containsFilter = function(element, filter) {
    _validateFilter(filter);
    _validateElement(element);

    if(Array.isArray(element)) {
        return _searchThroughArray(element, filter);
    } else if (commonFunctions.isObject(element)) {
        return _searchThroughArray(Object.values(element), filter);
    }

    filter = filter.toString().toLowerCase();
    const valueAsString = element.toString().toLowerCase();
    return valueAsString.includes(filter);
}

const _searchThroughArray = function(array, filter) {
    return array.filter(value => containsFilter(value, filter)).length !== 0;
}

const _validateFilter = function(filter) {
    if(!is.string(filter)) {
        throw new TypeError(`Provided filter is not a string neither a number.`);
    }
}

const _validateElement = function(element) {
    const isNotArrayObjectStringOrNumber = !Array.isArray(element)
        && !commonFunctions.isObject(element)
        && !is.string(element)
        && !is.number(element);

    if(isNotArrayObjectStringOrNumber || is.null(element)) {
        throw new TypeError(`Element is not a number, string, array, object or is null.`);
    }
}