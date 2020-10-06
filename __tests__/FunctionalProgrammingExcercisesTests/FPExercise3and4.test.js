import { arrayRandomValues, createArray10ArraysWithin } from '../../FunctionalProgrammingExcercises/FPExcercise3and4';

test('Should create few arrays with random values inside and with provided length.', () => {
    const array1 = arrayRandomValues(3);
    const array2 = arrayRandomValues(3);

    const areSame = array1[0] === array2[0] || array1[1] === array2[1] || array1[2] === array2[2];

    expect(areSame).toBe(false);
    expect(array1.length).toBe(3);
    expect(array2.length).toBe(3);
});

test(`Provided length is not of type number. Should throw type error.`, () => {
   expect(() => { arrayRandomValues('5') }).toThrow(TypeError);
   expect(() => { arrayRandomValues('') }).toThrow(TypeError);
   expect(() => { arrayRandomValues(null) }).toThrow(TypeError);
   expect(() => { arrayRandomValues(undefined) }).toThrow(TypeError);
   expect(() => { arrayRandomValues(NaN) }).toThrow(TypeError);
   expect(() => { arrayRandomValues({ length: 5 }) }).toThrow(TypeError);
   expect(() => { arrayRandomValues(true) }).toThrow(TypeError);
});

test(`Provided length is less than 0. Should throw an error.`, () => {
    expect(() => { arrayRandomValues(-3) }).toThrowError();
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
    expect(array[0].length).toBe(10);
    expect(array[1].length).toBe(10);
    expect(array[2].length).toBe(10);
    expect(array[3].length).toBe(10);
    expect(array[4].length).toBe(10);
    expect(array[5].length).toBe(10);
    expect(array[6].length).toBe(10);
    expect(array[7].length).toBe(10);
    expect(array[8].length).toBe(10);
    expect(array[9].length).toBe(10);
});