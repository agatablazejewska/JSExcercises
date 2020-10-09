import { calculateAge } from '../../FunctionalProgrammingExcercises/FPExcercise1.js';

describe('Check if function return correct results', () => {

    let currentYear;
    beforeAll(() => {
        currentYear = new Date().getFullYear();
    });

    test('Calculates age from year 1995 in different formats. Should return correct value and all of the results should be equal.', () => {
        const birthYear = 1995;
        const typeNumberResult = calculateAge(birthYear);
        const typeDateResult = calculateAge(new Date(birthYear, 1, 1));
        const typeStringResult = calculateAge(`${birthYear}`);

        const resultsArray = [typeNumberResult, typeDateResult, typeStringResult];

        resultsArray.forEach(result => expect(result).toBe(currentYear - birthYear));

        const areEqual = typeNumberResult === typeDateResult && typeDateResult === typeStringResult;
        expect(areEqual).toBe(true);
    });
});


describe(`Check if function responds properly to encountered errors`, () => {
    test('Provided birth year is a negative value, should throw an error', () => {
        expect(() => { calculateAge(-2) }).toThrow('Birth year must be a positive value.');
    });

    test('Birth year is provided as string that is not convertible to a number. Should throw an error.', () => {
        const argumentsArray = ['num1995s', ' ', ''];

        argumentsArray.forEach(a => expect(() => { calculateAge(a) })
            .toThrow(new Error(`Birth year can't contain any letters.`)));
    });

    test(`Provided birth year is not a correct year but it starts with a number
    and parseInt can still get a number out of it. Should still throw an error.`,
        () => {
            expect(() => { calculateAge('1995story') })
                .toThrow(new TypeError(`Birth year can't contain any letters.`));
        });

    test('Birth year is not of type number. Should throw an error.', () => {
        const typesArray = [true, null, undefined, NaN, { year: 1995 }];

        typesArray.forEach(t => expect(() => { calculateAge(t) })
            .toThrow(new TypeError(`Provided argument is not of type number nor valid date nor of type string.`)));
    });
});


