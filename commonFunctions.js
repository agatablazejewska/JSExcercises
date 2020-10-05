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
    if(typeof number !== 'number' || number !== number) {
        throw TypeError("Provided variable is not of type number");
    }
};

export function validateString(string) {
    if(typeof string !== 'string') {
        throw TypeError("Provided variable is not of type string");
    }
};

export function validateBoolean(boolean) {
    if(typeof boolean !== 'boolean') {
        throw TypeError("Provided variable is not of type boolean");
    }
};

export function isNumberPositive(number) {
    if(number < 0) {
        throw Error(`Value should be positive and was: ${number}`);
    }
}

export function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i;
     if(!emailRegex.test(email)) {
         throw new Error("Provided value is not a valid e-mail");
     };
}