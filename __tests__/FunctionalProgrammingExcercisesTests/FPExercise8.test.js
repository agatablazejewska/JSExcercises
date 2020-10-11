import { when } from 'jest-when';
import * as data from '../../FunctionalProgrammingExcercises/FPExcercise8Data';
import { takeRandomValue, generateRandomAge, generatePhoneNumber, generateHuman } from '../../FunctionalProgrammingExcercises/FPExcercise8';

describe(`Tests for function that takes random values from an array.`, () => {

    describe('Check if function returns correct results', () => {

        test(`Takes arrays with first names and surnames as argument. 
          Should return data that is present in the array.`, () => {
           const name = takeRandomValue(data.firstNames);
           const surname = takeRandomValue(data.surnames);

           expect(data.firstNames.includes(name)).toBe(true);
           expect(data.surnames.includes(surname)).toBe(true);
        });
    });


    describe(`Check if function responds properly to encountered errors`, () => {

        test(`Provided array is empty. Should throw an error.`, () => {
            const arr = [];

            expect(() => { takeRandomValue(arr) }).toThrowError(`Provided array is empty.`);
        });

        test(`Provided argument is not an array. Should throw a TypeError.`, () => {
            const types = [null, undefined, 1234, 'arr', true, { array: [1,2,3] }, NaN];

            types.forEach(t => expect(() => { takeRandomValue(t) })
                .toThrow(new TypeError(`Provided array variable isn't of type array`)));
        });
    });
});


describe(`Tests for function that generates random age. Check if function returns correct results. `, () => {

    test(`Should generate random numbers in the range 18 to 85.`, () => {
       const resultsArray = Array.from({ length: 100 }, () => generateRandomAge());

       resultsArray.forEach(element => expect(element >= 18 && element <= 85).toBe(true));
    });
});

describe(`Tests for function that generates random phone number.Check if function returns correct results.`, () => {

    test(`Should generate random phone number as string.`, () => {
       const result = generatePhoneNumber();

       expect(result.length).toBe(9);
       expect(typeof result === 'string').toBe(true);
       expect(isNaN(result) && isNaN(parseInt(result))).toBe(false);
    });
});

describe(`Tests for function that generates human object. Check if function returns correct results.`, () => {

    test(`Should generate a human object with all necessary properties that are not empty/undefined.
     Email should consist of name and surname combined.`, () => {
        const propertiesArray = ['_id', 'name', 'surname', 'age', 'country', 'phoneNr', 'email'];
        const result = generateHuman();

        propertiesArray.forEach(p => {
            expect(result[p]).not.toBe(undefined);
            expect(result[p]).not.toBe(null);
            expect(result[p]).not.toBe('');
        });

        expect(result.email).toBe(`${result.name.toLowerCase()}${result.surname.toLowerCase()}@gmail.com`);
    });
});

