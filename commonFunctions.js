export function validateArrayType(array) {
    if(!Array.isArray(array)) {
        throw TypeError("Provided array variable isn't of type array");
    };
}

export function validateCallbackType(callback) {
    if(typeof callback !== "function") {
        throw TypeError("Provided callback is not a function"); 
    } 
};

export function validate(array, callback) { 
    validateCallbackType(callback);
    validateArrayType(array);
};

export function validateNumber(number) {
    if(typeof number !== 'number') {
        throw TypeError("Provided variable is not of type number");
    }
};