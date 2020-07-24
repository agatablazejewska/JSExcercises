import { ICart, ItemAmountAndPrice } from "../Interfaces/Cart/ICart";
import { IItem } from "../Interfaces/Item/IItem";
import { DiscountCodes } from "../Utilities/DiscountCodes";

export class Cart implements ICart {
    private readonly _items: Array<ItemAmountAndPrice>;
    private readonly _currentDiscountCodes : DiscountCodes;
    discount: number;

    constructor() {
        this._items = new Array<ItemAmountAndPrice>();
        this._currentDiscountCodes = new DiscountCodes();
        this.discount = 0;
    }

    get items() {
        return this._items;
    }

    getPriceNoDiscountCode() : number {
        return this._items.reduce((acc, element) => acc + element.finalPrice, 0);
    }

    getAllDiscountsSumPrice() : number {
        const wholeCartDiscountSum = this.getPriceNoDiscountCode() - this.getFinalPrice();
        const eachItemDiscountSum = this._items.reduce((acc, element) => 
            acc + (element.priceNoDiscounts - element.finalPrice)
            , 0);

        return wholeCartDiscountSum + eachItemDiscountSum;
    }

    applyDiscountCode(code: string) : void {
        this.discount = this._currentDiscountCodes.getPercentOff(code);
    }

    addItem(item: IItem) : void {
        let itemPresent = this._items.find(i => i.item.name === item.name);

        if(itemPresent) {
            this._updateExistingValues(itemPresent, item);    
        }
        else {
            this._items.push({item: item, amount: 1, finalPrice: item.getPriceAfterDiscount(), priceNoDiscounts: item.price});
        }
    }

    removeItem(id: string) : void {
         let itemToRemoveIndex = this._items.findIndex(i => i.item.id === id);

         if (itemToRemoveIndex > -1) {
            this._items.splice(itemToRemoveIndex, 1);
        }
    }

    getFinalPrice() : number {
        const priceNoDiscountCode = this.getPriceNoDiscountCode();

        return (100 - this.discount) / 100 * priceNoDiscountCode;
    }

    getAllItemsAmount() : number {
        return this._items.reduce((acc, element) => acc + element.amount, 0);
    }

    private _updateExistingValues(itemPresent: ItemAmountAndPrice, item: IItem) {
        itemPresent.amount++;
        itemPresent.finalPrice += item.getPriceAfterDiscount();
        itemPresent.priceNoDiscounts += item.price;
    }
}