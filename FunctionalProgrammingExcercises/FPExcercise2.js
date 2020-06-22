import * as commonFunctions from './commonFunctions.js';

const canBuildRightAngledTraingle = function(sideA, sideB, sideC) {
    validate(sideA, sideB, sideC);

    const sideASquared = Math.pow(sideA, 2);
    const sideBSquared = Math.pow(sideB, 2);
    const sideCSquared = Math.pow(sideC, 2);

    const sortedMinToMax = [sideASquared, sideBSquared, sideCSquared].sort((a, b) => a - b);

    return sortedMinToMax[0] + sortedMinToMax[1] === sortedMinToMax[2];
}
console.log(canBuildRightAngledTraingle(3, 4, 5));
console.log(canBuildRightAngledTraingle(3, 5, 5));

function validate(sideA, sideB, sideC) {
    commonFunctions.validateNumber(sideA);
    commonFunctions.validateNumber(sideB);
    commonFunctions.validateNumber(sideC);
    commonFunctions.isNumberPositive(sideA);
    commonFunctions.isNumberPositive(sideB);
    commonFunctions.isNumberPositive(sideC);
}
