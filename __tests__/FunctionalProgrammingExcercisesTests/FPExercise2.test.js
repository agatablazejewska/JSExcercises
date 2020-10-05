import { canBuildRightAngledTriangle } from '../../FunctionalProgrammingExcercises/FPExcercise2';

test(`Gets numbers that can be used to build right angled triangle. Should return true`, () => {
    expect(canBuildRightAngledTriangle(3,4,5)).toBe(true);
    expect(canBuildRightAngledTriangle(4,3,5)).toBe(true);
    expect(canBuildRightAngledTriangle(5,3,4)).toBe(true);
    expect(canBuildRightAngledTriangle(13,5,12)).toBe(true);
});

test(`Gets numbers that can't be used to build right angled triangle. Should return false`, () => {
    expect(canBuildRightAngledTriangle(2,9,5)).toBe(false);
    expect(canBuildRightAngledTriangle(8,1,12)).toBe(false);
    expect(canBuildRightAngledTriangle(3,3,3)).toBe(false);
});

test(`One or more of provided numbers are equal to 0. Should throw an error.`,() => {
    expect(() => { canBuildRightAngledTriangle(3,4,0) })
        .toThrowError();

    expect(() => { canBuildRightAngledTriangle(0,2,5) })
        .toThrowError();

    expect(() => { canBuildRightAngledTriangle(3,0,4) })
        .toThrowError();

    expect(() => { canBuildRightAngledTriangle(0,3,0) })
        .toThrowError();

    expect(() => { canBuildRightAngledTriangle(0,0,0) })
        .toThrowError();
});

test(`Some of arguments provided are strings. Should throw a TypeError.`, () => {
    expect(() => { canBuildRightAngledTriangle('3',4,5) })
        .toThrow(TypeError);

    expect(() => { canBuildRightAngledTriangle(3,'4',5) })
        .toThrow(TypeError);

    expect(() => { canBuildRightAngledTriangle(3,4,'5') })
        .toThrow(TypeError);

    expect(() => { canBuildRightAngledTriangle(3,4,'six') })
        .toThrow(TypeError);
});

test(`Some of arguments provided are negative values. Should throw an error.`, () => {
    expect(() => { canBuildRightAngledTriangle(-3,4,5) })
        .toThrowError();

    expect(() => { canBuildRightAngledTriangle(3,-4,5) })
        .toThrowError();

    expect(() => { canBuildRightAngledTriangle(3,4,-5) })
        .toThrowError();
});

test(`Some of arguments provided are not of type number. Should throw a TypeError.`, () => {
    expect(() => { canBuildRightAngledTriangle(true,4,5) })
        .toThrow(TypeError);

    expect(() => { canBuildRightAngledTriangle(3,null,5) })
        .toThrow(TypeError);

    expect(() => { canBuildRightAngledTriangle(3, undefined,-5) })
        .toThrow(TypeError);

    expect(() => { canBuildRightAngledTriangle(3, 4, NaN) })
        .toThrow(TypeError);

    expect(() => { canBuildRightAngledTriangle(3, { number: 4 },-5) })
        .toThrow(TypeError);
});
