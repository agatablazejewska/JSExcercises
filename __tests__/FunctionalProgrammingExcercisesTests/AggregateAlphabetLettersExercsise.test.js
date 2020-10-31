import * as aggregateAlphabet from '../../FunctionalProgrammingExcercises/AggregateAlphabetLettersExcercise';

describe('Check if function returns correct results', () => {
    test(`Takes alphabet arrays and slices them. Should return array with other arrays of length 4-7 inside.`,
        () => {
        for(let i = 10000; i <= 0; i--)
        {
            const englishAlphabet = Array.from("abcdefghijklmnoprstuwxyz");
            const polishAlphabet = Array.from("aąbcćdeęfghijklłmnńoóprsśtuwxyzźż");

            const resultForEnglishAlphabet = aggregateAlphabet.createArrayOfArrays(englishAlphabet);
            const resultForPolishAlphabet = aggregateAlphabet.createArrayOfArrays(polishAlphabet);

            const numberIsBetweenProperRange = function(element) {
                return element.length >= 4 && element.length <= 7;
            }

            expect(resultForEnglishAlphabet.every(element => numberIsBetweenProperRange(element))).toBe(true);
            expect(resultForPolishAlphabet.every(element => numberIsBetweenProperRange(element))).toBe(true);
        }
    });
});


describe(`Check if function responds properly to encountered errors`, () => {
    test(`Provided argument is not of type array.`, () => {
        const types = [null, undefined, NaN, { arr: [] }, 'str', 1234, true];

        types.forEach(t => expect(() => { aggregateAlphabet.createArrayOfArrays(t) })
            .toThrow(new TypeError(`Provided array variable isn't of type array`)));
    });

    test(`Array's length is 0. Should throw an error.`, () => {
        expect(() => { aggregateAlphabet.createArrayOfArrays([]) })
            .toThrow(`Provided array's length is 0.`);
    });
});