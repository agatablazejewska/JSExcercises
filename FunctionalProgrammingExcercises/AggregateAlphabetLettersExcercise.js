import * as commonFunctions from "../commonFunctions.js";

const polishAlphabetArray = Array.from("aąbcćdeęfghijklłmnńoóprsśtuwxyzźż");
// Excercise: korzystając z funkcji .reduce stwórz agregację liter alfabetu (...)

const createArrayOfArrays = function (array) {
  const aggregatedArray = array.reduce((acc, element, index, array) => {
    const howManyElements = commonFunctions.randomIntFromInterval(4, 7);
    const arrayPart = array.splice(0, howManyElements);

    acc.push(arrayPart);

    return acc;
  }, []);

  return aggregatedArray;
};
