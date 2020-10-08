import { canBuildRightAngledTriangle } from '../../FunctionalProgrammingExcercises/FPExcercise2';

test(`Gets numbers that can be used to build right angled triangle. Should return true`, () => {
    const sidesArray = [
        { sideA: 3, sideB: 4, sideC: 5 },
        { sideA: 3, sideB: 4, sideC: 5 },
        { sideA: 3, sideB: 4, sideC: 5 },
        { sideA: 3, sideB: 4, sideC: 5 }];

    sidesArray.forEach(sides => expect(canBuildRightAngledTriangle(sides.sideA, sides.sideB, sides.sideC)).toBe(true));
});

test(`Gets numbers that can't be used to build right angled triangle. Should return false`, () => {
    const sidesArray = [
        { sideA: 2, sideB: 9, sideC: 5 },
        { sideA: 8, sideB: 1, sideC: 12 },
        { sideA: 3, sideB: 3, sideC: 3 }];

    sidesArray.forEach(sides => expect(canBuildRightAngledTriangle(sides.sideA, sides.sideB, sides.sideC)).toBe(false));
});

test(`One or more of provided numbers are equal to 0. Should throw an error.`,() => {
    const sidesArray = [
        { sideA: 3, sideB: 4, sideC: 0 },
        { sideA: 0, sideB: 2, sideC: 5 },
        { sideA: 3, sideB: 0, sideC: 5 },
        { sideA: 0, sideB: 3, sideC: 0 },
        { sideA: 0, sideB: 0, sideC: 0 }];

    sidesArray.forEach(sides =>
        expect( () => { canBuildRightAngledTriangle(sides.sideA, sides.sideB, sides.sideC) })
            .toThrowError(`You can't build right angled triangle with any side equal to 0.`));
});

test(`Some of arguments provided are strings. Should throw a TypeError.`, () => {
    const sidesArray = [
        { sideA: '3', sideB: 4, sideC: 4 },
        { sideA: 1, sideB: '2', sideC: 5 },
        { sideA: 3, sideB: 2, sideC: '5' },
        { sideA: 1, sideB: 3, sideC: 'six' }];

    sidesArray.forEach(sides =>
        expect( () => { canBuildRightAngledTriangle(sides.sideA, sides.sideB, sides.sideC) })
            .toThrow(new TypeError(`Provided variable is not of type number`)));
});

test(`Some of arguments provided are negative values. Should throw an error.`, () => {
    const sidesArray = [
        { sideA: -2, sideB: 9, sideC: 5 },
        { sideA: 8, sideB: -1, sideC: 12 },
        { sideA: 3, sideB: 3, sideC: -3 }];

    sidesArray.forEach(sides =>
        expect( () => { canBuildRightAngledTriangle(sides.sideA, sides.sideB, sides.sideC) })
            .toThrowError(`Value should be a positive number.`));
});

test(`Some of arguments provided are not of type number. Should throw a TypeError.`, () => {
    const typesArray = [true, null, undefined, NaN, [], { number: 4 }, '3'];

    typesArray.forEach(t =>
        expect( () => { canBuildRightAngledTriangle(t, 3, 5) })
            .toThrow(new TypeError(`Provided variable is not of type number`)));

    typesArray.forEach(t =>
        expect( () => { canBuildRightAngledTriangle(2, t, 5) })
            .toThrow(new TypeError(`Provided variable is not of type number`)));

    typesArray.forEach(t =>
        expect( () => { canBuildRightAngledTriangle(2, 3, t) })
            .toThrow(new TypeError(`Provided variable is not of type number`)));
});
