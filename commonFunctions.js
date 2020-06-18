export function validateArrayType(array) {
    try {
        if(!Array.isArray(array)) {
            throw TypeError("Provided array variable isn't of type array");
        }
    }
    catch(error) {
        if(error instanceof TypeError) {
            console.error(error.stack);
        }
    }
}

export function validateCallbackType(callback) {
    try {
        if(typeof callback !== "function"){
            throw TypeError("Provided callback is not a function");
        }
    }
    catch {
        if(error instanceof TypeError) {
            console.error(error.stack);
        }
    }
    
}

export function validate(array, callback){ 
    validateCallbackType(callback);
    validateArrayType(array);
}