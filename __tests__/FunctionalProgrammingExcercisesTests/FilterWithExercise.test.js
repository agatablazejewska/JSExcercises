import { data } from '../../FunctionalProgrammingExcercises/FilterWithExerciseData';
import * as filterWithExercise from '../../FunctionalProgrammingExcercises/FilterByStringExcercise.js';

describe(`Tests for the function that checks if some particular element contains the filter string.`, () => {
    describe('Check if function returns correct results', () => {
        test(`Provided data is an object, array or array of objects, string and number. Should return true or false.`, () => {
           const filter = 'filter';
           const expectedTrue = [{ name: 'Susan', has: 'filter' },
               ['sure', 'there', 'chocolate', 'hair', 'filter', 24],
               [{ someString: 'someString', someOtherString: 'fly' },
                   { someString: 'someString', someOtherString: 'another' },
                   { someString: 'filter', someOtherString: 'elephant' },
                   { someString: 'no', someOtherString: 'dance' },
                   { someString: 'like', someOtherString: 'forest' }],
               'filtered'];

           const expectedFalse = [{ name: 'Susan', has: 'nothing' },
               ['sure', 'there', 'chocolate', 'hair', 'loose', 24],
               [{ someString: 'someString', someOtherString: 'fly' },
                   { someString: 'someString', someOtherString: 'another' },
                   { someString: 'none', someOtherString: 'elephant' },
                   { someString: 'no', someOtherString: 'dance' },
                   { someString: 'like', someOtherString: 'forest' }],
               'mighty'];

            expectedTrue.forEach(element => expect(filterWithExercise.containsFilter(element, filter)).toBe(true));
            expectedFalse.forEach(element => expect(filterWithExercise.containsFilter(element, filter)).toBe(false));
        });

        test(`Provided filter is a string that contains number. 
        In the provided data array there is the same number of type number, not a string.
        Should find it in the provided data and return true.`, () => {
           const filter = '24';
           const data = [['sure', 'there', 24, 'chocolate', 'hair', 'filter'],
               ['sure', 'there', '24', 'chocolate', 'hair', 'filter'],
               ['sure', 'there', '24years old', 'chocolate', 'hair', 'filter']];

            data.forEach(element =>  expect(filterWithExercise.containsFilter(element, filter)).toBe(true));
        });
    });

    describe(`Check if function responds properly to encountered errors`, () => {
        test(`Provided data element is not an array, object, string or number. Should throw TypeError.`, () => {
            const filter = 'filter';
            const data = [true, NaN, null, undefined];

            data.forEach(element => expect(() => filterWithExercise.containsFilter(element, filter)
                .toThrow(new TypeError(`Element is not a number, string, array, object or is null.`))));
        });
    });
});


describe('Tests for the function that should be used to get the final results.', () => {
    describe('Check if function returns correct results', () => {
        test(`Filter can be found in the first (shallow) level of the data array.
        Should return array of only the objects that contain the filter.`, () => {
            const filter1 = 'velos';
            const filter2 = 'female';

            expect(filterWithExercise.filterWith(data, filter1)).toEqual([data[0]]);
            expect(filterWithExercise.filterWith(data, filter2)).toEqual([data[1], data[3]]);
        });

        test(`Filter can be found in the deeper levels of the data array.
        Should return array of only the objects that contain the filter.`, () => {
            const filter1 = 'sheppard';
            const filter2 = 'culpa';
            const filter3 = 'dolor';

            expect(filterWithExercise.filterWith(data, filter1)).toEqual([data[0]]);
            expect(filterWithExercise.filterWith(data, filter2)).toEqual([data[4]]);
            expect(filterWithExercise.filterWith(data, filter3)).toEqual([data[1], data[4]]);
        });

        test(`Filter length is less or equal to 2. Should return empty array.`, () => {
            const filters = ['ex', '2', ''];

            filters.forEach(filter => expect(filterWithExercise.filterWith(data, filter)).toEqual([]));
        });
    });


    describe(`Check if function responds properly to encountered errors`, () => {
        test(`Provided argument is not of type array. Should throw TypeError.`, () => {
            const filter = 'filter';
            const data = [true, NaN, null, undefined, 23, 'string'];

            data.forEach(element => expect(() => filterWithExercise.filterWith(element, filter)
                .toThrow(new TypeError(`Provided array variable isn't of type array`))));
        });

        test(`Provided filter is not of type string or number. Should throw TypeError.`, () => {
            const filters = [true, NaN, null, undefined, [], 2]

            filters.forEach(filter => expect(() => filterWithExercise.filterWith(data, filter)
                .toThrow(new TypeError(`Provided filter is not a string neither a number.`))));
        });
    });
});
