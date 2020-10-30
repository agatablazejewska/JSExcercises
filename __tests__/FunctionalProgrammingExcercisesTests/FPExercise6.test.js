import { filterByEvenNumbers } from '../../FunctionalProgrammingExcercises/FPExcercise6';

describe('Check if function returns correct results', () => {

    test(`Given array contains even numbers. Should return array that consists of even numbers only.`, () => {
        const sampleArray = [2, 5, 7, 10, -34, 16, 879, 1, -13, 18, 456];
        const evenNumbersArrayForSampleArray = filterByEvenNumbers(sampleArray);
        const correctResultForSampleArray = [2, 10, -34, 16, 18, 456];

        expect(evenNumbersArrayForSampleArray).toEqual(correctResultForSampleArray);
    });

    test(`Given array doesn't contain any even numbers. Should return empty array.`, () => {
       const noneEvenNumbersArray = [-3, 9, 11, 875, -251, 1, 157];
       const resultForNoneEvenNumbersArray = filterByEvenNumbers(noneEvenNumbersArray);
       const emptyArray = [];

        expect(resultForNoneEvenNumbersArray).toEqual(emptyArray);
    });
});



describe(`Check if function responds properly to encountered errors`, () => {

    test(`Provided array is empty. Should throw error.`, () => {
       const emptyArray = [];

       expect(() => {filterByEvenNumbers(emptyArray)}).toThrowError(`Provided array is empty.`);
    });

    test(`Provided argument is not of type array. Should throw TypeError`, () => {
       const typesArray = [null, undefined, 1234, 'arr', true, { array: [1,2,3] }, NaN];

       typesArray.forEach(t => expect(() => { filterByEvenNumbers(t) })
           .toThrow(new TypeError(`Provided array variable isn't of type array`)));
    });
});
