import * as data from '../../FunctionalProgrammingExcercises/FPExcercise8Data';
import * as generateFunctions from '../../FunctionalProgrammingExcercises/FPExcercise8';

describe(`Tests for function that takes random values from an array.`, () => {
    describe('Check if function returns correct results', () => {

        test(`Takes arrays with first names and surnames as argument. 
          Should return data that is present in the array.`, () => {
           const name = generateFunctions.takeRandomValue(data.firstNames);
           const surname = generateFunctions.takeRandomValue(data.surnames);
           const doesFirstNamesArrayContainName = data.firstNames.includes(name);
           const doesSurnamesArrayContainSurname = data.surnames.includes(surname);

           expect(doesFirstNamesArrayContainName).toBe(true);
           expect(doesSurnamesArrayContainSurname).toBe(true);
        });
    });


    describe(`Check if function responds properly to encountered errors`, () => {
        test(`Provided array is empty. Should throw an error.`, () => {
            const emptyArray = [];

            expect(() => { generateFunctions.takeRandomValue(emptyArray) })
                .toThrowError(`Provided array is empty.`);
        });

        test(`Provided argument is not an array. Should throw a TypeError.`, () => {
            const types = [null, undefined, 1234, 'arr', true, { array: [1,2,3] }, NaN];

            types.forEach(type => expect(() => { generateFunctions.takeRandomValue(type) })
                .toThrow(new TypeError(`Provided array variable isn't of type array`)));
        });
    });
});


describe(`Tests for function that generates random age. Check if function returns correct results. `, () => {
    test(`Should generate random numbers in the range 18 to 85.`, () => {
        const generatedAgeBetween18And85Array = Array.from({ length: 100 }, () => generateFunctions.generateRandomAge());
        const isAgeBetweenProperRange = function(age) {
            return age >= 18 && age <= 85;
        }

        expect(generatedAgeBetween18And85Array.every(age => isAgeBetweenProperRange(age))).toBe(true);
    });
});


describe(`Tests for function that generates random phone number.Check if function returns correct results.`, () => {
    test(`Should generate random phone number as string.`, () => {
       const generatedPhoneNumberString = generateFunctions.generatePhoneNumber();

       expect(generatedPhoneNumberString.length).toBe(9);
       expect(typeof generatedPhoneNumberString === 'string').toBe(true);
       expect(isNaN(generatedPhoneNumberString) && isNaN(parseInt(generatedPhoneNumberString))).toBe(false);
    });
});


describe(`Tests for function that generates human object. Check if function returns correct results.`, () => {
    let takeRandomValueSpy = null;
    let generateAgeSpy = null;
    let generatePhoneNumberSpy = null;
    beforeAll(() => {
        takeRandomValueSpy = jest.spyOn(generateFunctions, 'takeRandomValue')
            .mockImplementation(() => 'mock');

        generateAgeSpy = jest.spyOn(generateFunctions, 'generateRandomAge')
            .mockImplementation(() => 25);

        generatePhoneNumberSpy = jest.spyOn(generateFunctions, 'generatePhoneNumber')
            .mockImplementation(() => '123456789');
    });

    afterAll(() => {
        takeRandomValueSpy.mockRestore();
        generateAgeSpy.mockRestore();
        generatePhoneNumberSpy.mockRestore();
    });

    test(`Should generate a human object with all necessary properties that are not empty/undefined.
     Email should consist of name and surname combined.`, () => {
        const propertiesArray = ['_id', 'name', 'surname', 'age', 'country', 'phoneNr', 'email'];
        const generatedHuman = generateFunctions.generateHuman();

        propertiesArray.forEach(property => {
            expect(generatedHuman[property]).not.toBe(undefined);
            expect(generatedHuman[property]).not.toBe(null);
            expect(generatedHuman[property]).not.toBe('');
        });

        expect(generatedHuman.name).toBe('mock');
        expect(generatedHuman.age).toBe(25);
        expect(generatedHuman.phoneNr).toBe('123456789');
        expect(generatedHuman.email).toBe(`mockmock@gmail.com`);
    });
});

