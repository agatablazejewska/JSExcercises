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