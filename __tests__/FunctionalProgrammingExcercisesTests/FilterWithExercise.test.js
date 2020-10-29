import { data } from '../../FunctionalProgrammingExcercises/FilterWithExerciseData';
import * as filterWithExercise from '../../FunctionalProgrammingExcercises/FilterByStringExcercise.js';

describe('Check if function returns correct results', () => {
    test('Filter can be found in the first (shallow) level of the data array.' +
        ' Should return array of only the objects that contain the filter.', () => {
        const filter1 = 'velos';
        const filter2 = 'female';

        expect(filterWithExercise.filterWith(data, filter1)).toEqual([data[0]]);
        expect(filterWithExercise.filterWith(data, filter2)).toEqual([data[1], data[3]]);
    });

    test('Filter can be found in the deeper levels of the data array.' +
        ' Should return array of only the objects that contain the filter.', () => {
        const filter1 = 'sheppard';
        const filter2 = 'culpa';

        expect(filterWithExercise.filterWith(data, filter1)).toEqual([data[0]]);
        expect(filterWithExercise.filterWith(data, filter2)).toEqual([data[4]]);
    });
});


describe(`Check if function responds properly to encountered errors`, () => {

});