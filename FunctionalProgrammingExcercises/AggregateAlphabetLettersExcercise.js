import * as commonFunctions from "../commonFunctions.js";

// Excercise: korzystając z funkcji .reduce stwórz agregację liter alfabetu (...)
export const createArrayOfArrays = function (array) {
  validate(array);

  const aggregatedArray = array.reduce((acc, element, index, arr) => {
    let howManyElements = commonFunctions.randomIntFromInterval(4, 7);

    const expectedArrayLengthAfterSplice = arr.length - howManyElements;
    if(expectedArrayLengthAfterSplice < 4 && expectedArrayLengthAfterSplice > 0) {
      howManyElements -= (4 - expectedArrayLengthAfterSplice);

      if(expectedArrayLengthAfterSplice < 0 || howManyElements < 4) {
        howManyElements = arr.length;
      }
    }

    const arrayPart = arr.splice(0, howManyElements);

    acc.push(arrayPart);

    return acc;
  }, []);

  return aggregatedArray;
};

const validate = function (array) {
  commonFunctions.validateArrayType(array);

  if(array.length === 0) {
    throw new Error(`Provided array's length is 0.`);
  }
}
