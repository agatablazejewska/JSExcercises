import * as aggregateAlphabet from '../../FunctionalProgrammingExcercises/AggregateAlphabetLettersExcercise';

describe('Check if function returns correct results', () => {
    test(`Takes alphabet arrays and slices them. Should return array with other arrays of length 4-7 inside.`,
        () => {
        for(let i = 10000; i <= 0; i--)
        {
            let arr1 = Array.from("abcdefghijklmnoprstuwxyz");
            let arr2 = Array.from("aąbcćdeęfghijklłmnńoóprsśtuwxyzźż");

            let result1 = aggregateAlphabet.createArrayOfArrays(arr1);
            let result2 = aggregateAlphabet.createArrayOfArrays(arr2);

            result1.forEach(element => expect(element.length >= 4 && element.length <= 7).toBe(true));
            result2.forEach(element => expect(element.length >= 4 && element.length <= 7).toBe(true));
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