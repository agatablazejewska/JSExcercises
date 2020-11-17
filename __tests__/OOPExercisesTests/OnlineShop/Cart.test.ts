import _ from 'lodash';
import { Cart } from '../../../OOPExcercises/Excercise2TS/Cart/Cart';
import { DiscountCodesSingletone } from '../../../OOPExcercises/Excercise2TS/DiscountCodes/DiscountCodesSingletone';
import { Item } from '../../../OOPExcercises/Excercise2TS/Item/Item';
import { Categories } from '../../../OOPExcercises/Excercise2TS/Utilities/Enums/Categories';
import { ItemInCartSummary } from '../../../OOPExcercises/Excercise2TS/Utilities/Interfaces/Cart/ICart';
import { IItem } from '../../../OOPExcercises/Excercise2TS/Utilities/Interfaces/Item/IItem';

const consoleErrorSpy = jest.spyOn(console, 'error');

const item50PercentDiscount = new Item('item50percent', Categories.Food, 100, 50);
const item0PercentDiscount = new Item('item0percent', Categories.Food, 100);
let cart: Cart;

beforeEach(() => {
    consoleErrorSpy.mockClear();
    cart = new Cart();
});

describe(`Tests for the addItem method.`, () => {
    describe('Check if method returns correct results', () => {
        test(`Should add first items - only ones of their ids. 
        Their data should show amount: 1 for each of them. 
        Cart summary should get updated.`, () => {
            const correctItemsAmountAfterAddingItemsWithDifferentIds = 2;
            const correctDiscountsSumOnCartAfterAddingItemsWithDifferentIds = 50;
            const correctFinalPriceOnCartAfterAddingItemsWithDifferentIds = 150;
            const correctDataAssociatedWithItem50PercentDiscount = {
                item: item50PercentDiscount,
                amount: 1,
                finalPrice: 50,
                priceNoDiscounts: 100,
            };

            const correctDataAssociatedWithItem0PercentDiscount = {
                item: item0PercentDiscount,
                amount: 1,
                finalPrice: 100,
                priceNoDiscounts: 100,
            };

            cart.addItem(item50PercentDiscount);
            cart.addItem(item0PercentDiscount);
            const item50PercentDiscountWithCartData = cart.items[0];
            const item0PercentDiscountWithCartData = cart.items[1];

            expect(cart.items).toHaveLength(2);
            expect(item50PercentDiscountWithCartData).toEqual(correctDataAssociatedWithItem50PercentDiscount);
            expect(item0PercentDiscountWithCartData).toEqual(correctDataAssociatedWithItem0PercentDiscount);
            expect(cart.getAllItemsAmount()).toBe(correctItemsAmountAfterAddingItemsWithDifferentIds);
            expect(cart.getAllDiscountsSum()).toBe(correctDiscountsSumOnCartAfterAddingItemsWithDifferentIds);
            expect(cart.getFinalPrice()).toBe(correctFinalPriceOnCartAfterAddingItemsWithDifferentIds);
        });

        test(`Add two same items. Should keep items list with length of 1.`, () => {
            cart.addItem(item50PercentDiscount);
            cart.addItem(item50PercentDiscount);

            expect(cart.items).toHaveLength(1);
        });

        test(`Add two items with same data, but they're different instances and have different id.
         Should add them as separate items in the cart.`, () => {
            const itemSameDataAsItemDiscount50Percent = new Item('item50percent', Categories.Food, 100, 50);

            cart.addItem(item50PercentDiscount);
            cart.addItem(itemSameDataAsItemDiscount50Percent);

            const originalItemData = cart.items[0];
            const sameAsOriginalItemData = cart.items[1];

            expect(cart.items).toHaveLength(2);
            expect(originalItemData.item).toEqual(item50PercentDiscount);
            expect(sameAsOriginalItemData.item).toEqual(itemSameDataAsItemDiscount50Percent);
        });
    });
});

describe(`Tests for the removeOneItemOfThisType method.`, () => {
    describe('Check if method returns correct results', () => {
        test(`There is only one item with this id in the cart. 
        Items list length should be back to 0.`, () => {
            cart.addItem(item50PercentDiscount);
            cart.removeOneItemById(item50PercentDiscount.id);

            expect(cart.items).toHaveLength(0);
        });

        test(`There is only one item with this id in the cart. 
        After removal cart summary should get updated.`, () => {
            const correctAmountOfItemsAfterItemRemoval = 0;
            const correctFinalPriceWhenTheCartIsEmptied = 0;
            const correctDiscountsSumWhenCartIsEmptied  = 0;

            cart.addItem(item50PercentDiscount);
            cart.removeOneItemById(item50PercentDiscount.id);

            expect(cart.getAllItemsAmount()).toBe(correctAmountOfItemsAfterItemRemoval);
            expect(cart.getFinalPrice()).toBe(correctFinalPriceWhenTheCartIsEmptied);
            expect(cart.getAllDiscountsSum()).toBe(correctDiscountsSumWhenCartIsEmptied);
        });


        test(`There are 3 items with this id in the cart. Should update cart's summary.`, () => {
            const otherItemToBeAdded = new Item('other', Categories.Alcohol, 23);
            const correctItemListAllItemsAndAfterRemoval = [item50PercentDiscount, otherItemToBeAdded];
            const correctItemsAmountAfterRemovingOnlyOneOfItemsWithThisId = 2;
            const correctFinalPriceAfterRemovingOnlyOneOfItemsWithThisId = 73;
            const correctDiscountsSumAfterRemovingOnlyOneOfItemsWithThisId = 50;

            cart.addItem(item50PercentDiscount);
            cart.addItem(item50PercentDiscount);
            cart.addItem(otherItemToBeAdded);

            cart.removeOneItemById(item50PercentDiscount.id);

            expect(cart.getAllItemsAmount()).toBe(correctItemsAmountAfterRemovingOnlyOneOfItemsWithThisId);
            expect(cart.getFinalPrice()).toBe(correctFinalPriceAfterRemovingOnlyOneOfItemsWithThisId);
            expect(cart.getAllDiscountsSum()).toBe(correctDiscountsSumAfterRemovingOnlyOneOfItemsWithThisId);
            cart.items.forEach((product, index) =>
                expectItemsToBeEqual(product, index, correctItemListAllItemsAndAfterRemoval));
        });
    });

    describe(`Check if method responds properly to encountered errors`, () => {
        test(`The item can't be located in the cart. 
        Should inform user through console.error.`, () => {
            const removeOneItemThatDoesntExistInCart = () => {
                cart.removeOneItemById(item50PercentDiscount.id);
            }

            expect(removeOneItemThatDoesntExistInCart).toThrowError(`There is no such item in this cart.`);
        });
    });
});

describe(`Tests for the removeAllItemsOfThisType method.`, () => {
    describe('Check if method returns correct results', () => {
        test(`There are two different items in the cart. 
        Should remove one of them completely. Should update cart's summary.`, () => {
            const otherItemToBeAdded = new Item('other', Categories.Alcohol, 23);
            const correctAllItemsListAfterRemoval = [otherItemToBeAdded];
            const correctItemsAmountAfterRemovingAllOfItemsWithThisId = 1;
            const correctFinalPriceAfterRemovingAllOfItemsWithThisId = 23;
            const correctDiscountsSumAfterRemovingAllOfItemsWithThisId = 0;

            cart.addItem(item50PercentDiscount);
            cart.addItem(item50PercentDiscount);
            cart.addItem(otherItemToBeAdded);
            cart.removeAllItemsById(item50PercentDiscount.id);

            expect(cart.getAllItemsAmount()).toBe(correctItemsAmountAfterRemovingAllOfItemsWithThisId);
            expect(cart.getFinalPrice()).toBe(correctFinalPriceAfterRemovingAllOfItemsWithThisId);
            expect(cart.getAllDiscountsSum()).toBe(correctDiscountsSumAfterRemovingAllOfItemsWithThisId);
            expect(cart.items).toHaveLength(1);
            cart.items.forEach((product, index) =>
                expectItemsToBeEqual(product, index, correctAllItemsListAfterRemoval));
        });
    });


    describe(`Check if method responds properly to encountered errors`, () => {
        test(`There are no items of this type in the list. 
        Should inform user through console.error.`, () => {
            const removeAllItemsByIdThatCantBeFoundInCart = () =>  cart.removeAllItemsById(item50PercentDiscount.id);

            expect(removeAllItemsByIdThatCantBeFoundInCart).toThrowError(`There is no such item in this cart.`);
        });
    });
});

describe(`Tests for the applyDiscountCode method.`, () => {
    test(`Should update final price after applying discount code.`, () => {
        const discount50Percent = { code: '50Percent', percentOff: 50 };
        const correctFinalPriceAfterApplyingDiscountCode = 50;

        DiscountCodesSingletone.discountCodes.add(discount50Percent);
        cart.addItem(item0PercentDiscount);
        cart.applyDiscountCode('50Percent');

        expect(cart.getFinalPrice()).toEqual(correctFinalPriceAfterApplyingDiscountCode);
    });
});

describe(`Tests for the cart summary calculation that hasn't been tested in any other test.`, () => {
    test(`Test for getPriceNoDiscountCode. Should get price without the discount applied.`, () => {
        const discount50Percent = { code: '50Percent', percentOff: 50 };
        const correctPriceWithoutDiscountCodeApplied = 2 * item0PercentDiscount.getPriceAfterDiscount();

        DiscountCodesSingletone.discountCodes.add(discount50Percent);
        cart.addItem(item0PercentDiscount);
        cart.addItem(item0PercentDiscount);
        cart.applyDiscountCode('50Percent');

        expect(cart.getPriceNoDiscountCode()).toBe(correctPriceWithoutDiscountCodeApplied);
    });
});

function expectItemsToBeEqual(product: ItemInCartSummary, index: number, arrayWithItemsToCompare: IItem[]) {
    const areItemsEqual = _.isEqual(product.item, arrayWithItemsToCompare[index]);
    expect(areItemsEqual).toBe(true);
}