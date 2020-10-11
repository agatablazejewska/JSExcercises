import uuid4 from "uuid4";
import * as commonFunctions from "../commonFunctions";
import * as dataArrays from "./FPExcercise8Data.js";

export const takeRandomValue = function (array) {
  commonFunctions.validateArrayType(array);
  if(array.length === 0) {
    throw new Error(`Provided array is empty.`);
  }

  const randomIndex = commonFunctions.randomIntFromInterval(0, array.length - 1);
  return array[randomIndex];
};

export const generateRandomAge = function () {
  return commonFunctions.randomIntFromInterval(18, 85);
};

export const generatePhoneNumber = function () {
  return Array.from({ length: 9 }, () => commonFunctions.randomIntFromInterval(0, 9)).join("");
};

export const generateHuman = function () {
  const human = {
    _id: uuid4(),
    name: takeRandomValue(dataArrays.firstNames),
    surname: takeRandomValue(dataArrays.surnames),
    age: generateRandomAge(),
    country: takeRandomValue(dataArrays.countries),
    phoneNr: generatePhoneNumber(),
  };
  human.email = `${human.name.toLowerCase()}${human.surname.toLowerCase()}@gmail.com`;

  return human;
};
