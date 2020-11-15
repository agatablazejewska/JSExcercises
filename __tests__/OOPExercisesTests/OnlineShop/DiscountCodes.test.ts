import { DiscountCodes } from '../../../OOPExcercises/Excercise2TS/DiscountCodes/DiscountCodes';
import {
    codeAndPercentageOffType,
} from '../../../OOPExcercises/Excercise2TS/Utilities/Interfaces/Discounts/IDiscountCodes';

const consoleErrorSpy = jest.spyOn(console, 'error');

const discountCode = { code: 'discount', percentOff: 50 };
const emptyArray: codeAndPercentageOffType[] = [];
let discountCodes: DiscountCodes;

beforeEach(() => {
    consoleErrorSpy.mockClear();
    discountCodes = new DiscountCodes();
});

describe(`Tests for the add method.`, () => {
    describe('Check if method returns correct results', () => {
        test(`Should add new discount code.`, () => {
            const discountCodesArrayWithCodeAdded = [discountCode];

            discountCodes.add(discountCode);
            expect(discountCodes.discountCodes).toEqual(discountCodesArrayWithCodeAdded);
        });
    });


    describe(`Check if method responds properly to encountered errors`, () => {
        test(`Discount provided with the code is invalid (negative or over 100). 
        Should change the discount to 0 and inform the user through console.error. 
        Should add the code.`, () => {
            const discountCodeNegativeDiscount = {
                code: 'discountNegative',
                percentOff: -5,
            };
            const discountCodeDiscountOver100 = {
                code: 'discountOver100',
                percentOff: 105,
            };

            discountCodes.add(discountCodeNegativeDiscount);
            discountCodes.add(discountCodeDiscountOver100);

            expect(consoleErrorSpy).toHaveBeenCalledTimes(2);
            expect(consoleErrorSpy)
                .toHaveBeenCalledWith('Provided discount is invalid. Discount should be in the range of 0-100.');
        });

        test(`The code already exists in the list.`, () => {
            const codeToBeAddedTwice = { code: 'addTwice', percentOff: 10 };

            discountCodes.add(codeToBeAddedTwice);
            discountCodes.add(codeToBeAddedTwice);
            expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
            expect(consoleErrorSpy).toHaveBeenCalledWith('The code already exists.');
        });
    });
});

describe(`Tests for the remove method.`, () => {
    describe('Check if method returns correct results', () => {
        test(`Should remove code from the list.`, () => {
            discountCodes.add(discountCode);
            discountCodes.remove(discountCode.code);

            expect(discountCodes.discountCodes).toEqual(emptyArray);
        });
    });


    describe(`Check if method responds properly to encountered errors`, () => {
        test(`The provided code doesn't exist in the list.
        Should inform a user.`, () => {
            discountCodes.remove(discountCode.code);

            expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
            expect(consoleErrorSpy).toHaveBeenCalledWith('There is no such code in the list.');
        });
    });
});

describe(`Tests for the getPercentOff method.`, () => {
    describe('Check if method returns correct results', () => {
        test(`Should get the discount associated with the code.`, () => {
            discountCodes.add(discountCode);

            const correctDiscountAmount = discountCode.percentOff;
            const discountAmountReturned = discountCodes.getPercentOff(discountCode.code);

            expect(discountAmountReturned).toEqual(correctDiscountAmount);
        });
    });


    describe(`Check if method responds properly to encountered errors`, () => {
        test(`The code provided doesn't exist in the list.
        Should inform a user with console.error`, () => {
            discountCodes.getPercentOff(discountCode.code);

            expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
            expect(consoleErrorSpy).toHaveBeenCalledWith('There is no such discount code in the list.');
        });
    });
});