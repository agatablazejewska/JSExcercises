import { containsWordOrPhrase } from '../../FunctionalProgrammingExcercises/FPExcercise5';

const wordsArray = ['anticipate', 'Done', 'Layer', 'paper', 'McDonalds', 'guinea pig',
    'vitamins', 'piano', 'Mirror', 'tackle', `it doesn't float my boat`, 'busy bee',
    'Emerge', 'xenotransplantation', 'Emerge', 'done', `I'm done playing piano`];

describe('Check if function return correct results', () => {

    test(`Sample array contains words and phrases like Done, tackle, busy bee.
      Should return arrays with objects that will contain the phrase and corresponding index.`, () => {
        const arrayDone = containsWordOrPhrase(wordsArray, 'done');
        const arrayTackle = containsWordOrPhrase(wordsArray, 'tackle');
        const arrayBusyBee = containsWordOrPhrase(wordsArray, 'busy bee');

        const arrayDoneExpectedResult = [{ value: 'Done', index: 1 }, { value: 'done', index: 15 },
            { value: `I'm done playing piano`, index: 16 }];
        const arrayTackleExpectedResult = [{ value: 'tackle', index: 9 }];
        const arrayBusyBeeExpectedResult = [{ value: 'busy bee', index: 11 }];

        expect(arrayDone).toEqual(arrayDoneExpectedResult);
        expect(arrayTackle).toEqual(arrayTackleExpectedResult);
        expect(arrayBusyBee).toEqual(arrayBusyBeeExpectedResult);
    });

    test(`Provided word is a part of a word present in the array. Should return array with whole word/phrase data.`,
        () => {
        const partOfTheExistingWord = containsWordOrPhrase(wordsArray, 'does');
        const expectedResult = [{ value: `it doesn't float my boat`, index: 10 }];

        expect(partOfTheExistingWord.length).toBe(1);
        expect(partOfTheExistingWord).toEqual(expectedResult);
    });

    test(`Sample array doesn't contain provided phrases.
     Should return message that there is no such phrase in the array.`, () => {
        const oppositeCaseInsensitive = containsWordOrPhrase(wordsArray, 'opposite');
        const oppositeCaseSensitive = containsWordOrPhrase(wordsArray, 'opposite', true);

        expect(oppositeCaseInsensitive).toBe('There is no such phrase in the provided array');

        expect(oppositeCaseSensitive).toBe('There is no such phrase in the provided array');
    });
});


describe(`Check if function responds properly to encountered errors`, () => {

    test(`Provided array is empty. Should give message that phrase wasn't found in the array.`, () => {
        const array = [];
        expect(() => { containsWordOrPhrase(array, 'phrase') })
            .toThrowError(`Array is empty and therefore it is impossible to find any phrases.`);
    });

    test(`Provided argument is not of type array. Should throw TypeError.`, () => {
        const typesArray =[1234, 'array', NaN, null, undefined, true, {arr: []}];

        typesArray.forEach(t => expect(() => { containsWordOrPhrase(t, 'phrase') })
            .toThrow(new TypeError(`Provided array variable isn't of type array`)));
    });

    test(`Provided argument is not of type string. Should throw TypeError.`, () => {
        const typesArray =[1234, NaN, null, undefined, true, { phrase: 'some phrase' }, []];

        typesArray.forEach(t => expect(() => { containsWordOrPhrase(wordsArray, t) })
            .toThrow(new TypeError(`Provided variable is not of type string`)));
    });
});









