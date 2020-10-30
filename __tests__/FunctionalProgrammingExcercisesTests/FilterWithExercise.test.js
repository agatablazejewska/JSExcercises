import { data } from '../../FunctionalProgrammingExcercises/FilterWithExerciseData';
import * as filterWithExercise from '../../FunctionalProgrammingExcercises/FilterByStringExcercise.js';
import {containsFilter} from "../../FunctionalProgrammingExcercises/FilterByStringExcercise.js";

describe(`Tests for the function that checks if some particular element contains the filter string.`, () => {
    describe('Check if function returns correct results', () => {

        const containsFilter = function(element) {
            const defaultFilter = 'filter';
            return filterWithExercise.containsFilter(element, defaultFilter);
        }

        test(`Provided data is an object, array or array of objects, string and number. Should return true or false.`, () => {
           const allExpectedToResultInTrueWithFilter = [{ name: 'Susan', has: 'filter' },
               ['sure', 'there', 'chocolate', 'hair', 'filter', 24],
               [{ someString: 'someString', someOtherString: 'fly' },
                   { someString: 'someString', someOtherString: 'another' },
                   { someString: 'filter', someOtherString: 'elephant' },
                   { someString: 'no', someOtherString: 'dance' },
                   { someString: 'like', someOtherString: 'forest' }],
               'filtered'];
           const allExpectedToResultInFalseWithFilter = [{ name: 'Susan', has: 'nothing' },
               ['sure', 'there', 'chocolate', 'hair', 'loose', 24],
               [{ someString: 'someString', someOtherString: 'fly' },
                   { someString: 'someString', someOtherString: 'another' },
                   { someString: 'none', someOtherString: 'elephant' },
                   { someString: 'no', someOtherString: 'dance' },
                   { someString: 'like', someOtherString: 'forest' }],
               'mighty'];

           expect(allExpectedToResultInTrueWithFilter
               .every(element => containsFilter(element))).toBe(true);

           expect(allExpectedToResultInFalseWithFilter
               .every(element => containsFilter(element))).toBe(true);
        });

        test(`Provided filter is a string that contains number. 
        In the provided data array there is the same number of type number, not a string.
        Should find it in the provided data and return true.`, () => {
           const numberAsString = '24';
           const nestedArraysOfDataWithNumbersInDifferentForms = [['sure', 'there', 24, 'chocolate', 'hair', 'filter'],
               ['sure', 'there', '24', 'chocolate', 'hair', 'filter'],
               ['sure', 'there', '24years old', 'chocolate', 'hair', 'filter']];

           const containsNumber = function(element) {
               return filterWithExercise.containsFilter(element, numberAsString);
           }

           expect(nestedArraysOfDataWithNumbersInDifferentForms
               .every(element => containsNumber(element))).toBe(true);
        });
    });

    describe(`Check if function responds properly to encountered errors`, () => {
        test(`Provided data element is not an array, object, string or number. Should throw TypeError.`, () => {
            const typesArray = [true, NaN, null, undefined];

            typesArray.forEach(type => expect(() => containsFilter(type)
                .toThrow(new TypeError(`Element is not a number, string, array, object or is null.`))));
        });
    });
});


describe('Tests for the function that should be used to get the final results.', () => {
    const filterWithImportedData = function(filter) {
        return filterWithExercise.filterWith(data, filter);
    }

    describe('Check if function returns correct results', () => {
        test(`Filter can be found in the first (shallow) level of the data array.
        Should return array of only the objects that contain the filter.`, () => {
            const filterVelos = 'velos';
            const filterFemale = 'female';

            const resultFoundForVelosString = filterWithImportedData(filterVelos);
            const resultFoundForFemaleString = filterWithImportedData(filterFemale);

            const correctResultForVelosString = [data[0]];
            const correctResultForFemaleString = [data[1], data[3]];

            expect(resultFoundForVelosString).toEqual(correctResultForVelosString);
            expect(resultFoundForFemaleString).toEqual(correctResultForFemaleString);
        });

        test(`Filter can be found in the deeper levels of the data array.
        Should return array of only the objects that contain the filter.`, () => {
            const filterSheppard = 'sheppard';
            const filterCulpa = 'culpa';
            const filterDolor = 'dolor';

            const resultFoundForSheppardString = filterWithImportedData(filterSheppard);
            const resultFoundForCulpaString = filterWithImportedData(filterCulpa);
            const resultFoundForDolorString = filterWithImportedData(filterDolor);

            const correctResultForSheppardString = [data[0]];
            const correctResultFoundForCulpaString = [data[4]];
            const correctResultFoundForDolorString = [data[1], data[4]];

            expect(resultFoundForSheppardString).toEqual(correctResultForSheppardString);
            expect(resultFoundForCulpaString).toEqual(correctResultFoundForCulpaString);
            expect(resultFoundForDolorString).toEqual(correctResultFoundForDolorString);
        });

        test(`Filter length is less or equal to 2. Should return empty array.`, () => {
            const filtersLengthLessEqual2 = ['ex', '2', ''];

            const emptyArray = [];

            filtersLengthLessEqual2.forEach(filter => expect(filterWithImportedData(filter))
                .toEqual(emptyArray));
        });
    });


    describe(`Check if function responds properly to encountered errors`, () => {
        test(`Provided argument is not of type array. Should throw TypeError.`, () => {
            const filter = 'filter';
            const dataTypes = [true, NaN, null, undefined, 23, 'string'];

            dataTypes.forEach(type => expect(() => filterWithExercise.filterWith(type, filter)
                .toThrow(new TypeError(`Provided array variable isn't of type array`))));
        });

        test(`Provided filter is not of type string or number. Should throw TypeError.`, () => {
            const filterTypes = [true, NaN, null, undefined, [], 2]

            filterTypes.forEach(type => expect(() => filterWithImportedData(type)
                .toThrow(new TypeError(`Provided filter is not a string neither a number.`))));
        });
    });
});
