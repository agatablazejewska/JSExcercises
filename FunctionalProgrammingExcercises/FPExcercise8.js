import uuid4 from "uuid4";
import * as commonFunctions from "../commonFunctions";
import * as dataArrays from "./FPExcercise8Data.js";
import * as thisModule from './FPExcercise8';

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
  const name = thisModule.takeRandomValue(dataArrays.firstNames);
  const surname = thisModule.takeRandomValue(dataArrays.surnames);
  const human = {
    _id: uuid4(),
    name: name,
    surname: surname,
    email: `${name.toLowerCase()}${surname.toLowerCase()}@gmail.com`,
    age: thisModule.generateRandomAge(),
    country: thisModule.takeRandomValue(dataArrays.countries),
    phoneNr: thisModule.generatePhoneNumber(),
  };

  return human;
};
