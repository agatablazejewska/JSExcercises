import { calculateAge } from '../../FunctionalProgrammingExcercises/FPExcercise1.js';

let currentYear;
beforeAll(() => {
    currentYear = new Date().getFullYear();
})

test('Calculates age from year 1995 to equal current year - birth year', () => {
    expect(calculateAge(1995)).toBe(currentYear - 1995);
});

test('Provided birth year is a negative value, should throw an error', () => {
    expect(() => { calculateAge(-2) }).toThrow('Birth year must be a positive value.');
});

test(`Provided birth year is a correct year but in string format.
 Should convert string to number and calculate age.`,
() => {
    expect(calculateAge('1995')).toBe(currentYear - 1995);
});

test('Birth year is provided as string that is not convertible to a number. Should throw an error.', () => {
    expect(() => { calculateAge('num1995s') }).toThrow(TypeError);
    expect(() => { calculateAge(' ') }).toThrow(TypeError);
    expect(() => { calculateAge('') }).toThrow(TypeError);
});

test(`Provided birth year is not a correct year but it starts with a number
    and parseInt can still get a number out of it. Should convert string to number and calculate age.`,
    () => {
        expect(calculateAge('1995story')).toBe(currentYear - 1995);
});

test('Birth year is not of type number. Should throw an error.', () => {
    expect(() => { calculateAge(true) }).toThrow(TypeError);
    expect(() => { calculateAge(null) }).toThrow(TypeError);
    expect(() => { calculateAge(undefined) }).toThrow(TypeError);
    expect(() => { calculateAge(NaN) }).toThrow(TypeError);
    expect(() => { calculateAge({ year: 1995 }) }).toThrow(TypeError);
});