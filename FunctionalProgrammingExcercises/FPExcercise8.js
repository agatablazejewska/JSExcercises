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
  const human = {
    _id: uuid4(),
    name: thisModule.takeRandomValue(dataArrays.firstNames),
    surname: thisModule.takeRandomValue(dataArrays.surnames),
    age: thisModule.generateRandomAge(),
    country: thisModule.takeRandomValue(dataArrays.countries),
    phoneNr: thisModule.generatePhoneNumber(),
  };
  human.email = `${human.name.toLowerCase()}${human.surname.toLowerCase()}@gmail.com`;

  return human;
};
