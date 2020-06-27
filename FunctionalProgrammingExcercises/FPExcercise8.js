import { v4 as uuidv4 } from "../npm/node_modules/uuid";
import * as commonFunctions from "../commonFunctions";
import * as dataArrays from "./FPExcercise8Data.js";
import { randomIntFromInterval } from "./AggregateAlphabetLettersExcercise";

const takeRandomValue = function (array) {
  commonFunctions.validateArrayType(array);

  const randomIndex = randomIntFromInterval(0, array.length - 1);
  return array[randomIndex];
};

const generateRandomAge = function () {
  return randomIntFromInterval(18, 85);
};

const generatePhoneNumber = function () {
  return Array.from({ length: 9 }, () => randomIntFromInterval(0, 9)).join("");
};

const generateHuman = function () {
  const human = {
    _id: uuidv4(),
    name: takeRandomValue(dataArrays.firstNames),
    surname: takeRandomValue(dataArrays.surnames),
    age: generateRandomAge(),
    country: takeRandomValue(dataArrays.countries),
    phoneNr: generatePhoneNumber(),
  };
  human.email = `${human.name.toLowerCase()}${human.surname.toLowerCase()}@gmail.com`;

  return human;
};

export { generateHuman };
