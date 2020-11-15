import { cloneDeep } from 'lodash';
import { DiscountCodesSingletone } from '../DiscountCodes/DiscountCodesSingletone';
import { ICart, ItemInCartSummary } from "../Utilities/Interfaces/Cart/ICart";
import { IDiscountCodes } from '../Utilities/Interfaces/Discounts/IDiscountCodes';
import { IItem } from "../Utilities/Interfaces/Item/IItem";

export type CartSummary = {
    finalPrice: number,
    cartDiscountAmount: number,
    cartPriceNoDiscountCode: number,
    allItemsAmount: number,
    cartAndItemsDiscountsAmount: number
}

export class Cart implements ICart {
    private readonly _items: Array<ItemInCartSummary>;
    private readonly _currentDiscountCodes : IDiscountCodes;
    private _sum: CartSummary;
    discount: number;

    constructor() {
        this._items = new Array<ItemInCartSummary>();
        this._currentDiscountCodes = DiscountCodesSingletone.discountCodes;
        this.discount = 0;
        this._sum = { 
            finalPrice: 0,
            cartDiscountAmount: 0,
            cartPriceNoDiscountCode: 0,
            allItemsAmount: 0,
            cartAndItemsDiscountsAmount: 0
        };    
    }
        
    get items() {
        return cloneDeep(this._items);
    }

    addItem(item: IItem) : void {
        let itemAlreadyInCartData = this._items.find(i => i.item.id === item.id);

        if(itemAlreadyInCartData) {
            this._updateItemInCartSummaryWhenItemAdded(itemAlreadyInCartData, item);
        }
        else {
            this._items.push({item: item, amount: 1, finalPrice: item.getPriceAfterDiscount(), priceNoDiscounts: item.price});
        }

        this._updateCartSummaryItemAdded(item);
    }

    removeOneItemById(id: string) : void {
        const dataToRemove = this._findItemToRemove(id);

        if(dataToRemove.amount === 1) {
            this.removeAllItemsById(id);
            return;
        }

        this._updateItemInCartSummaryWhenItemRemoved(dataToRemove);
        this._updateCartSummaryAfterRemove(dataToRemove);
    }

    removeAllItemsById(id: string) : void {
        const dataToRemove = this._findItemToRemove(id);
        const dataToRemoveIndex = this._items.findIndex(i => i.item.id === id);

        this._items.splice(dataToRemoveIndex, 1);

        this._updateCartSummaryAfterRemove(dataToRemove);
    }

    applyDiscountCode(code: string) : void {
        this.discount = this._currentDiscountCodes.getPercentOff(code);
        this._calculateFinalPrice();
        this._updateDiscountsSummaryWhenDiscountCodeApplied();
    }

    getFinalPrice(): number {
        return this._sum.finalPrice;
    }

    getPriceNoDiscountCode() : number {
        return this._sum.cartPriceNoDiscountCode;
    }

    getAllDiscountsSum() : number {
        return this._sum.cartAndItemsDiscountsAmount;
    }

    getAllItemsAmount() : number {
        return this._sum.allItemsAmount;
    }

    private _findItemDataById(id: string) : ItemInCartSummary | undefined {
        return this._items.find(i => i.item.id === id);
    }
   
    private _calculateFinalPrice() : number {
        const priceNoDiscountCode = this._sum.cartPriceNoDiscountCode;
        const finalPrice = ((100 - this.discount) / 100) * priceNoDiscountCode;

        this._updateCartDiscountPrice(priceNoDiscountCode, finalPrice);
        this._sum.finalPrice = finalPrice;

        return finalPrice;
    }

    private _updateDiscountsSummaryWhenDiscountCodeApplied() {
        this._sum.cartAndItemsDiscountsAmount += this._sum.cartDiscountAmount;
    }

    private _updateCartDiscountPrice(priceNoDiscountCode: number, finalPrice: number) {
        this._sum.cartDiscountAmount = priceNoDiscountCode - finalPrice;
    }

    private _updateItemInCartSummaryWhenItemAdded(presentData: ItemInCartSummary, item: IItem) {
        presentData.amount++;
        presentData.finalPrice += item.getPriceAfterDiscount();
        presentData.priceNoDiscounts += item.price;
    }

    private _updateItemInCartSummaryWhenItemRemoved(dataToModify: ItemInCartSummary) {
        const item = dataToModify.item;
        
        dataToModify.amount--;
        dataToModify.finalPrice -= item.getPriceAfterDiscount();
        dataToModify.priceNoDiscounts -= item.price;
    }

    private _updateCartSummaryItemAdded(item: IItem) {
        const itemPriceAfterDiscount = item.getPriceAfterDiscount();

        this._sum.allItemsAmount++;
        this._sum.cartPriceNoDiscountCode += itemPriceAfterDiscount;
        this._sum.cartAndItemsDiscountsAmount += item.price - itemPriceAfterDiscount;
        this._sum.finalPrice = this._calculateFinalPrice();
    }

    private _updateCartSummaryAfterRemove(data: ItemInCartSummary) {
        const itemsPriceAfterDiscount = data.finalPrice;

        this._sum.allItemsAmount -= data.amount;
        this._sum.cartPriceNoDiscountCode -= itemsPriceAfterDiscount;
        this._sum.cartAndItemsDiscountsAmount -= data.priceNoDiscounts - data.finalPrice;
        this._sum.finalPrice = this._calculateFinalPrice();
    }

    private _findItemToRemove(id: string): ItemInCartSummary {
        const dataToRemove = this._findItemDataById(id);

        if(!dataToRemove) {
            throw new Error(`There is no such item in this cart.`);
        }

        return dataToRemove;
    }
}