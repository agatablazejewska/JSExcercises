import { containsWordOrPhrase } from '../../FunctionalProgrammingExcercises/FPExcercise5';

const wordsArray = ['anticipate', 'Done', 'Layer', 'paper', 'McDonalds', 'guinea pig',
    'vitamins', 'piano', 'Mirror', 'tackle', `it doesn't float my boat`, 'busy bee',
    'Emerge', 'xenotransplantation', 'Emerge', 'done', `I'm done playing piano`];

test(`Sample array contains words and phrases like Done, tackle, busy bee. Case insensitive.
 Should return arrays with objects that will contain the phrase and corresponding index.`, () => {
    const arrayDone = containsWordOrPhrase(wordsArray, 'done');
    const arrayTackle = containsWordOrPhrase(wordsArray, 'tackle');
    const arrayBusyBee = containsWordOrPhrase(wordsArray, 'busy bee');

    expect(arrayDone.length).toBe(3);
    expect(arrayDone[0]).toEqual({ value: 'Done', index: 1 });
    expect(arrayDone[1]).toEqual({ value: 'done', index: 15 });
    expect(arrayDone[2]).toEqual({ value: `I'm done playing piano`, index: 16 });

    expect(arrayTackle.length).toBe(1);
    expect(arrayTackle[0]).toEqual({ value: 'tackle', index: 9 });

    expect(arrayBusyBee.length).toBe(1);
    expect(arrayBusyBee[0]).toEqual({ value: 'busy bee', index: 11 });
});

test(`Sample array contains words and phrases like Done, tackle, busy bee. Case sensitive.
 Should return arrays with objects that will contain the phrase
 and corresponding index or string telling it doesn't contain such phrase.`, () => {
    const done = containsWordOrPhrase(wordsArray, 'done', true);
    const tackle = containsWordOrPhrase(wordsArray, 'Tackle', true);
    const busyBee = containsWordOrPhrase(wordsArray, 'busy Bee', true);

    expect(done.length).toBe(2);
    expect(done[0]).toEqual({ value: 'done', index: 15 });
    expect(done[1]).toEqual({ value: `I'm done playing piano`, index: 16 });

    expect(tackle).toBe('There is no such phrase in the provided array');

    expect(busyBee).toBe('There is no such phrase in the provided array');
});

test(`Provided word is a part of a word present in the array. Should return array with whole word/phrase data.`, () => {
    const partOfTheExistingWord = containsWordOrPhrase(wordsArray, 'does');

    expect(partOfTheExistingWord.length).toBe(1);
    expect(partOfTheExistingWord[0]).toEqual({ value: `it doesn't float my boat`, index: 10 });
});

test(`Sample array doesn't contain provided phrases. Both case sensitive and insensitive.
 Should return message that there is no such phrase in the array.`, () => {
    const oppositeCaseInsensitive = containsWordOrPhrase(wordsArray, 'opposite');
    const oppositeCaseSensitive = containsWordOrPhrase(wordsArray, 'opposite', true);

    expect(oppositeCaseInsensitive).toBe('There is no such phrase in the provided array');

    expect(oppositeCaseSensitive).toBe('There is no such phrase in the provided array');
});

test(`Provided array is empty. Should give message that phrase wasn't found in the array.`, () => {
    const array = [];
    expect(containsWordOrPhrase(array, 'phrase')).toBe('There is no such phrase in the provided array');
});

test(`Provided argument is not of type array. Should throw TypeError.`, () => {
   expect(() => { containsWordOrPhrase(12345, 'phrase') }).toThrow(TypeError);
   expect(() => { containsWordOrPhrase('array', 'phrase') }).toThrow(TypeError);
   expect(() => { containsWordOrPhrase(NaN, 'phrase') }).toThrow(TypeError);
   expect(() => { containsWordOrPhrase(null, 'phrase') }).toThrow(TypeError);
   expect(() => { containsWordOrPhrase(undefined, 'phrase') }).toThrow(TypeError);
   expect(() => { containsWordOrPhrase(true, 'phrase') }).toThrow(TypeError);
});

test(`Provided argument is not of type string. Should throw TypeError.`, () => {
    expect(() => { containsWordOrPhrase(wordsArray, true) }).toThrow(TypeError);
    expect(() => { containsWordOrPhrase(wordsArray, 1234) }).toThrow(TypeError);
    expect(() => { containsWordOrPhrase(wordsArray, null) }).toThrow(TypeError);
    expect(() => { containsWordOrPhrase(wordsArray, undefined) }).toThrow(TypeError);
    expect(() => { containsWordOrPhrase(wordsArray, NaN) }).toThrow(TypeError);
    expect(() => { containsWordOrPhrase(wordsArray, { phrase: 'some phrase'}) }).toThrow(TypeError);
    expect(() => { containsWordOrPhrase(wordsArray, []) }).toThrow(TypeError);
});

test(`Provided argument is not of type boolean. Should throw TypeError.`, () => {
    expect(() => { containsWordOrPhrase(wordsArray, 'phrase', 'true') }).toThrow(TypeError);
    expect(() => { containsWordOrPhrase(wordsArray, 'phrase', null) }).toThrow(TypeError);
    expect(() => { containsWordOrPhrase(wordsArray, 'phrase', 1234) }).toThrow(TypeError);
    expect(() => { containsWordOrPhrase(wordsArray, 'phrase', NaN) }).toThrow(TypeError);
    expect(() => { containsWordOrPhrase(wordsArray, 'phrase', []) }).toThrow(TypeError);
    expect(() => { containsWordOrPhrase(wordsArray, 'phrase', { caseSensitive: true }) }).toThrow(TypeError);
});







