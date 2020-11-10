import { Item } from '../../../OOPExcercises/Excercise2TS/Item/Item';
import { Categories } from '../../../OOPExcercises/Excercise2TS/Utilities/Enums/Categories';

jest.mock('uuid', () => ({ v4: () => '00000000-0000-0000-0000-000000000000' }));

const consoleErrorSpy = jest.spyOn(console, 'error');

const itemName = 'item';
const category = Categories.Food;
const itemPrice = 10;

beforeEach(() => {
    consoleErrorSpy.mockClear();
})

describe('Tests for creating an item', () => {
    describe('Check if method returns correct results', () => {
        test(`Creating new Contact object with all properties filled. 
        Should have expected properties and correct values associated with them.`, () => {
            const itemNoDiscount = new Item(itemName, category, itemPrice);
            const itemWithDiscount = new Item(itemName, category, itemPrice, 20);

            expect(itemNoDiscount).toBeInstanceOf(Item);
            expect(itemNoDiscount).toEqual(
                expect.objectContaining({
                    id: '00000000-0000-0000-0000-000000000000',
                    name: itemName,
                    category: category,
                    price: itemPrice,
                    discount: 0,
                }));

            expect(itemWithDiscount).toBeInstanceOf(Item);
            expect(itemWithDiscount).toEqual(
                expect.objectContaining({
                    id: '00000000-0000-0000-0000-000000000000',
                    name: itemName,
                    category: category,
                    price: itemPrice,
                    discount: 20,
                }));
        });
    });


    describe(`Check if method responds properly to encountered errors`, () => {
        test('Provided name is empty. Should throw an error.', () => {
            expect(() => new Item('', category, itemPrice))
                .toThrowError('Name of product must have a value and can not consist of white spaces');
        });

        test(`Provided price is a negative value. Should throw error.`, () => {
            expect(() => new Item(itemName, category, -5))
                .toThrowError(`Price can't be a negative value`);
        });

        test(`Provided discount is less than 0 or more than 100. 
        Should set it to 0 - meaning there is no discount and console.error.`, () => {
            const itemWithNegativeDiscount = new Item(itemName, category, itemPrice, -5);
            const itemWithDiscountMoreThan100 = new Item(itemName, category, itemPrice, 105);

            const discountAfterNegativeValueProvided = itemWithNegativeDiscount.discount;
            const discountAfterMoreThan100Provided = itemWithDiscountMoreThan100.discount;

            expect(discountAfterNegativeValueProvided).toEqual(0);
            expect(discountAfterMoreThan100Provided).toEqual(0);
            expect(consoleErrorSpy).toHaveBeenCalledTimes(2);
            expect(consoleErrorSpy).toHaveBeenCalledWith('Provided discount is invalid and therefore discount is set to 0%.');
        });
    });
});

describe(`Test for the getPriceAfterDiscount method.`, () => {
    test(`Should return the expected price after applying discount to it.`, () => {
        const itemPrice10Discount20Percent = new Item(itemName, category, itemPrice, 20);
        const itemPrice10Discount50Percent = new Item(itemName, category, itemPrice, 50);
        const itemPrice10Discount0 = new Item(itemName, category, itemPrice);
        const itemPrice10Discount100 = new Item(itemName, category, itemPrice, 100);

        expect(itemPrice10Discount20Percent.getPriceAfterDiscount()).toBe(8);
        expect(itemPrice10Discount50Percent.getPriceAfterDiscount()).toBe(5);
        expect(itemPrice10Discount0.getPriceAfterDiscount()).toBe(10);
        expect(itemPrice10Discount100.getPriceAfterDiscount()).toBe(0);
    });
});

describe(`Tests for the update method.`, () => {
    describe('Check if method returns correct results', () => {
        test(`Should change only provided properties.`, () => {
            const item = new Item(itemName, category, itemPrice);
            const newName = 'New Name';
            const newCategory = Categories.Hygiene;
            const newPrice = 100;
            const newDiscount = 50;

            expect(item).toEqual(
                expect.objectContaining({
                    name: itemName,
                    category: category,
                    price: itemPrice,
                    discount: 0,
                }));

            item.update({ name: newName });
            expect(item).toEqual(
                expect.objectContaining({
                    name: newName,
                    category: category,
                    price: itemPrice,
                    discount: 0,
                }));

            item.update({ category: newCategory });
            expect(item).toEqual(
                expect.objectContaining({
                    name: newName,
                    category: newCategory,
                    price: itemPrice,
                    discount: 0,
                }));

            item.update({ price: newPrice });
            expect(item).toEqual(
                expect.objectContaining({
                    name: newName,
                    category: newCategory,
                    price: newPrice,
                    discount: 0,
                }));

            item.update({ discount: newDiscount });
            expect(item).toEqual(
                expect.objectContaining({
                    name: newName,
                    category: newCategory,
                    price: newPrice,
                    discount: newDiscount,
                }));

            item.update({
                name: itemName,
                category: category,
                price: itemPrice,
                discount: 0,
            });

            expect(item).toEqual(
                expect.objectContaining({
                    name: itemName,
                    category: category,
                    price: itemPrice,
                    discount: 0,
                }));
        });
    });


    describe(`Check if method responds properly to encountered errors`, () => {
        test(`Some of the values provided are invalid. Should log an error.`, () => {
            const item = new Item(itemName, category, itemPrice);
            const newEmptyName = '';
            const newNegativePrice = -5;
            const newNegativeDiscount = -5;

            item.update({ name: newEmptyName });
            expect(consoleErrorSpy).toHaveBeenCalledWith(`Provided text is empty or consists of white spaces`);

            item.update({ price: newNegativePrice });
            expect(consoleErrorSpy).toHaveBeenCalledWith(`Price can't be a negative value`);

            item.update({ discount: newNegativeDiscount });
            expect(consoleErrorSpy).toHaveBeenCalledWith(`Discount should be in the range of 0 and 100.`);
        });
    });
});

describe(`Tests for the show methods.`, () => {
    const consoleLogSpy = jest.spyOn(console, 'log');

    beforeEach(() => {
        consoleLogSpy.mockClear();
    })

    test(`Test for the showAllInfo method. Should console.log all info about item.`, () => {
        const item = new Item(itemName, category, itemPrice);

        item.showAllInfo();
        expect(consoleLogSpy).toHaveBeenCalledTimes(1);
        expect(consoleLogSpy).toHaveBeenCalledWith(`${item.name}
         Price: ${item.price} $
         Category: ${item.category}
         Discount: ${item.discount}%`);
    })

    test(`Test for the show method. Should console.log short info about item.`, () => {
        const item = new Item(itemName, category, itemPrice);

        item.show();
        expect(consoleLogSpy).toHaveBeenCalledTimes(1);
        expect(consoleLogSpy).toHaveBeenCalledWith(`${item.name}
         ${item.price} $`);
    })
})
