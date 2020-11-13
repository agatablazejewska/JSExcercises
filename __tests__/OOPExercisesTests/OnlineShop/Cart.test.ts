import _ from 'lodash';
import { Cart } from '../../../OOPExcercises/Excercise2TS/Cart/Cart';
import { DiscountCodesSingletone } from '../../../OOPExcercises/Excercise2TS/DiscountCodes/DiscountCodesSingletone';
import { Item } from '../../../OOPExcercises/Excercise2TS/Item/Item';
import { Categories } from '../../../OOPExcercises/Excercise2TS/Utilities/Enums/Categories';
import { ItemAmountAndPrice } from '../../../OOPExcercises/Excercise2TS/Utilities/Interfaces/Cart/ICart';
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
        test(`Should add first items - only ones of their names. 
        It's amount should be 1 and the price with/without discount should be for one item. 
        Cart summary should get updated.`, () => {
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
            expect(cart.items.length).toEqual(1);

            cart.addItem(item0PercentDiscount);
            expect(cart.items.length).toEqual(2);

            const item50PercentDiscountWithCartData = cart.items[0];
            expect(item50PercentDiscountWithCartData).toEqual(correctDataAssociatedWithItem50PercentDiscount);

            const item0PercentDiscountWithCartData = cart.items[1];
            expect(item0PercentDiscountWithCartData).toEqual(correctDataAssociatedWithItem0PercentDiscount);

            const correctDiscountsSummary =
                (correctDataAssociatedWithItem50PercentDiscount.priceNoDiscounts
                    - correctDataAssociatedWithItem50PercentDiscount.finalPrice)
                + (correctDataAssociatedWithItem0PercentDiscount.priceNoDiscounts
                - correctDataAssociatedWithItem0PercentDiscount.finalPrice);
            const correctFinalPrice = correctDataAssociatedWithItem50PercentDiscount.finalPrice + correctDataAssociatedWithItem0PercentDiscount.finalPrice;

            expect(cart.getAllItemsAmount()).toEqual(2);
            expect(cart.getAllDiscountsSum()).toEqual(correctDiscountsSummary);
            expect(cart.getFinalPrice()).toEqual(correctFinalPrice);
        });

        test(`Add two same items. Should keep items list with length of 1. Should calculate the prices correctly.`, () => {
            const correctDataAssociatedWithTwoItems50PercentDiscount = {
                item: item50PercentDiscount,
                amount: 2,
                finalPrice: 100,
                priceNoDiscounts: 200,
            };

            cart.addItem(item50PercentDiscount);
            cart.addItem(item50PercentDiscount);
            expect(cart.items.length).toEqual(1);

            const item50PercentDiscountWithCartData = cart.items[0];
            expect(item50PercentDiscountWithCartData).toEqual(correctDataAssociatedWithTwoItems50PercentDiscount);
        });

        test(`Add two items with same data, but they're different instances.
         Should add them as separate items in the cart.`, () => {
            const itemSameDataAsItemDiscount50Percent = new Item('item50percent', Categories.Food, 100, 50);

            cart.addItem(item50PercentDiscount);
            cart.addItem(itemSameDataAsItemDiscount50Percent);
            expect(cart.items.length).toEqual(2);

            const originalItemData = cart.items[0];
            const sameAsOriginalItemData = cart.items[1];

            expect(originalItemData.item).toEqual(item50PercentDiscount);
            expect(sameAsOriginalItemData.item).toEqual(itemSameDataAsItemDiscount50Percent);
        });
    });
});

describe(`Tests for the removeOneItemOfThisType method.`, () => {
    describe('Check if method returns correct results', () => {
        test(`There is only one item of this type in the cart. 
        Should remove item from the cart and items list length should be back to 0 and cart summary should get updated.`, () => {
            const correctDiscountAmount = item50PercentDiscount.price * (item50PercentDiscount.discount / 100);
            const correctCartsFinalPrice = item50PercentDiscount.getPriceAfterDiscount();
            cart.addItem(item50PercentDiscount);

            expect(cart.getAllItemsAmount()).toEqual(1);
            expect(cart.getFinalPrice()).toEqual(correctCartsFinalPrice);
            expect(cart.getAllDiscountsSum()).toEqual(correctDiscountAmount);

            cart.removeOneItemOfThisType(item50PercentDiscount.id);
            expect(cart.getAllItemsAmount()).toEqual(0);
            expect(cart.getFinalPrice()).toEqual(0);
            expect(cart.getAllDiscountsSum()).toEqual(0);
        });

        test(`There are 3 items of this type in the cart. Should update cart's summary.`, () => {
            const otherItemToBeAdded = new Item('other', Categories.Alcohol, 23);

            const correctCartsFinalPriceAllItemsAdded = item50PercentDiscount.getPriceAfterDiscount() * 2
                + otherItemToBeAdded.getPriceAfterDiscount();
            const correctCartsDiscountAmountAllItemsAdded = 2 * (item50PercentDiscount.price * (item50PercentDiscount.discount / 100))
                + (otherItemToBeAdded.price * (otherItemToBeAdded.discount / 100));

            const correctItemListAllItemsAndAfterRemoval = [item50PercentDiscount, otherItemToBeAdded];

            const correctCartsFinalPriceAfterRemoval = correctCartsFinalPriceAllItemsAdded - item50PercentDiscount.getPriceAfterDiscount();
            const correctCartsDiscountAmountAfterRemoval = correctCartsDiscountAmountAllItemsAdded -
                (item50PercentDiscount.price * (item50PercentDiscount.discount / 100));

            cart.addItem(item50PercentDiscount);
            cart.addItem(item50PercentDiscount);
            cart.addItem(otherItemToBeAdded);

            expect(cart.getAllItemsAmount()).toEqual(3);
            expect(cart.getFinalPrice()).toEqual(correctCartsFinalPriceAllItemsAdded);
            expect(cart.getAllDiscountsSum()).toEqual(correctCartsDiscountAmountAllItemsAdded);
            cart.items.forEach((product, index) =>
                expectItemsToBeEqual(product, index, correctItemListAllItemsAndAfterRemoval));

            cart.removeOneItemOfThisType(item50PercentDiscount.id);
            expect(cart.getAllItemsAmount()).toEqual(2);
            expect(cart.getFinalPrice()).toEqual(correctCartsFinalPriceAfterRemoval);
            expect(cart.getAllDiscountsSum()).toEqual(correctCartsDiscountAmountAfterRemoval);
            cart.items.forEach((product, index) =>
                expectItemsToBeEqual(product, index, correctItemListAllItemsAndAfterRemoval));
        });
    });

    describe(`Check if method responds properly to encountered errors`, () => {
        test(`The item can't be located in the cart. 
        Should inform user through console.error.`, () => {
            cart.removeOneItemOfThisType(item50PercentDiscount.id);

            expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
            expect(consoleErrorSpy).toHaveBeenCalledWith(`There is no such item in this cart.`);
        });
    });
});

describe(`Tests for the removeAllItemsOfThisType method.`, () => {
    describe('Check if method returns correct results', () => {
        test(`There are two different items in the cart. 
        Should remove one of them completely. Should update cart's summary.`, () => {
            const otherItemToBeAdded = new Item('other', Categories.Alcohol, 23);

            const correctCartsFinalPriceAllItemsAdded = item50PercentDiscount.getPriceAfterDiscount() * 2
                + otherItemToBeAdded.getPriceAfterDiscount();
            const correctCartsDiscountAmountAllItemsAdded = 2 * (item50PercentDiscount.price * (item50PercentDiscount.discount / 100))
                + (otherItemToBeAdded.price * (otherItemToBeAdded.discount / 100));

            const correctItemListAllItems = [item50PercentDiscount, otherItemToBeAdded];
            const correctItemListAllItemsAfterRemoval = [otherItemToBeAdded];

            const correctCartsFinalPriceAfterRemoval = correctCartsFinalPriceAllItemsAdded - (2 * item50PercentDiscount.getPriceAfterDiscount());
            const correctCartsDiscountAmountAfterRemoval = correctCartsDiscountAmountAllItemsAdded -
                2 * (item50PercentDiscount.price * (item50PercentDiscount.discount / 100));

            cart.addItem(item50PercentDiscount);
            cart.addItem(item50PercentDiscount);
            cart.addItem(otherItemToBeAdded);

            expect(cart.getAllItemsAmount()).toEqual(3);
            expect(cart.getFinalPrice()).toEqual(correctCartsFinalPriceAllItemsAdded);
            expect(cart.getAllDiscountsSum()).toEqual(correctCartsDiscountAmountAllItemsAdded);
            expect(cart.items.length).toBe(2);
            cart.items.forEach((product, index) =>
                expectItemsToBeEqual(product, index, correctItemListAllItems));

            cart.removeAllItemsOfThisType(item50PercentDiscount.id);

            expect(cart.getAllItemsAmount()).toEqual(1);
            expect(cart.getFinalPrice()).toEqual(correctCartsFinalPriceAfterRemoval);
            expect(cart.getAllDiscountsSum()).toEqual(correctCartsDiscountAmountAfterRemoval);
            expect(cart.items.length).toBe(1);
            cart.items.forEach((product, index) =>
                expectItemsToBeEqual(product, index, correctItemListAllItemsAfterRemoval));
        });
    });


    describe(`Check if method responds properly to encountered errors`, () => {
        test(`There are no items of this type in the list. 
        Should inform user through console.error.`, () => {
            cart.removeAllItemsOfThisType(item50PercentDiscount.id);

            expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
            expect(consoleErrorSpy).toHaveBeenCalledWith(`There are no such items in this cart.`);
        });
    });
});

describe(`Tests for the applyDiscountCode method.`, () => {
    test(`Should update final price after applying discount code.`, () => {
        const discount50Percent = { code: '50Percent', percentOff: 50 };
        const correctFinalPriceBeforeApplyingDiscountCode = 100;
        const correctFinalPriceAfterApplyingDiscountCode = 50;
        DiscountCodesSingletone.discountCodes.add(discount50Percent);

        cart.addItem(item0PercentDiscount);
        const finalPriceBeforeApplyingDiscountCode = cart.getFinalPrice();
        expect(finalPriceBeforeApplyingDiscountCode).toEqual(correctFinalPriceBeforeApplyingDiscountCode);

        cart.applyDiscountCode('50Percent');
        expect(cart.getFinalPrice()).toEqual(correctFinalPriceAfterApplyingDiscountCode);
    });
});

describe(`Tests for getters.`, () => {
    test(`Test fot getFinalPrice. Should get correct value.`, () => {
        const correctFinalPrice = 2 * item0PercentDiscount.getPriceAfterDiscount();

        cart.addItem(item0PercentDiscount);
        cart.addItem(item0PercentDiscount);

        expect(cart.getFinalPrice()).toBe(correctFinalPrice);
    });

    test(`Test for getPriceNoDiscountCode. Should get price without the discount applied.`, () => {
        const discount50Percent = { code: '50Percent', percentOff: 50 };
        const correctPriceWithoutDiscountCodeApplied = 2 * item0PercentDiscount.getPriceAfterDiscount();

        DiscountCodesSingletone.discountCodes.add(discount50Percent);

        cart.addItem(item0PercentDiscount);
        cart.addItem(item0PercentDiscount);
        cart.applyDiscountCode('50Percent');

        expect(cart.getPriceNoDiscountCode()).toBe(correctPriceWithoutDiscountCodeApplied);
    });

    test(`Test for getAllDiscountsSum. Should get all of the discounts summed up.`, () => {
        cart.addItem(item50PercentDiscount);
        cart.addItem(item50PercentDiscount);

        const discount50Percent = { code: '50Percent', percentOff: 50 };
        const discountAmountFromItems = 2 * (item50PercentDiscount.price - item50PercentDiscount.getPriceAfterDiscount());
        const discountAmountFromItemsAndDiscountCode = discountAmountFromItems
            + (cart.getFinalPrice() * discount50Percent.percentOff / 100);
        DiscountCodesSingletone.discountCodes.add(discount50Percent);

        cart.applyDiscountCode('50Percent');

        expect(cart.getAllDiscountsSum()).toBe(discountAmountFromItemsAndDiscountCode);
    });

    test(`Test for the getAllItemsAmount method. Should return correct results.`, () => {
        cart.addItem(item50PercentDiscount);
        cart.addItem(item50PercentDiscount);
        cart.addItem(item0PercentDiscount);

        expect(cart.getAllItemsAmount()).toBe(3);
    })
});

function expectItemsToBeEqual(product: ItemAmountAndPrice, index: number, arrayWithItemsToCompare: IItem[]) {
    const areItemsEqual = _.isEqual(product.item, arrayWithItemsToCompare[index]);
    expect(areItemsEqual).toBe(true);
}