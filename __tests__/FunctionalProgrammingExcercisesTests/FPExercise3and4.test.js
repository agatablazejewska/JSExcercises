import { arrayRandomValues, createArray10ArraysWithin } from '../../FunctionalProgrammingExcercises/FPExcercise3and4';

test('Should create few arrays with random values inside and with provided length.', () => {
    const array1 = arrayRandomValues(3);
    const array2 = arrayRandomValues(3);

    expect(array1.length).toBe(3);
    expect(array2.length).toBe(3);
    expect(array1).not.toEqual(array2);
});

test(`Provided length is not of type number. Should throw type error.`, () => {
    const typesArray = ['5', null, undefined, NaN, { length: 5 }, true, []];

    typesArray.forEach(t => expect(() => { arrayRandomValues(t) }).toThrow(new TypeError(`Provided variable is not of type number`)));
});

test(`Provided length is less than 0. Should throw an error.`, () => {
    expect(() => { arrayRandomValues(-3) }).toThrowError(`Array length can't be less than 0.`);
});

test(`Provided length is equal to 0. Should create empty array.`, () => {
    const array = arrayRandomValues(0);
    expect(array).not.toBe(null);
    expect(array.length).toBe(0);
});

test(`Create array with nested arrays inside. Should be of length 10 and nested arrays should also be of length 10.`,
    () => {
    const array = createArray10ArraysWithin();

    expect(array.length).toBe(10);

    array.forEach((elem, index) => {
        expect(elem.length).toBe(10);
        if(index > 0) {
            expect(array[0]).not.toEqual(elem);
        }
    });
});