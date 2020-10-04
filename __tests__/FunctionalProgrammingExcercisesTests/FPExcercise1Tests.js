import { calculateAge } from '../../FunctionalProgrammingExcercises/FPExcercise1.js';

test('Calculates age from year 1995 to equal current year - birth year', () => {
    let currentYear = new Date().getFullYear();
    expect(calculateAge(1995)).toBe(currentYear - 1995);
})