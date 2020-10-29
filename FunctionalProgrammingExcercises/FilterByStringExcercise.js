//Excercise:korzystając z funkcji .filter stwórz funkcję filterWith(arr, filter) filtrowanie arraya z obiektami po stringu (...)
export const filterWith = function(arr, filter) {
    filter = filter.toLowerCase();
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
    if(Array.isArray(element)) {
        return element.filter(value => containsFilter(value, filter)).length !== 0;
    } else if (typeof element === 'object' && element !== null) {
        return Object.values(element).filter(value => containsFilter(value, filter)).length !== 0;
    }

    const valueAsString = element.toString().toLowerCase();
    return valueAsString.includes(filter);
}