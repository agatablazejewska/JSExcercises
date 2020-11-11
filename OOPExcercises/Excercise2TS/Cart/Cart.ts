import { cloneDeep } from 'lodash'
import { ICart, ItemAmountAndPrice } from "../Utilities/Interfaces/Cart/ICart";
import { IItem } from "../Utilities/Interfaces/Item/IItem";
import { DiscountCodes } from "../DiscountCodes/DiscountCodes";

export type PricesAndDiscountsSumsForCart = {
    finalPrice: number,
    cartDiscountPrice: number,
    cartPriceNoDiscountCode: number,
    allItemsAmount: number,
    allDiscountsPrice: number
}

export class Cart implements ICart {
    private readonly _items: Array<ItemAmountAndPrice>;
    private readonly _currentDiscountCodes : DiscountCodes;
    private _sum: PricesAndDiscountsSumsForCart;
    discount: number;

    constructor() {
        this._items = new Array<ItemAmountAndPrice>();
        this._currentDiscountCodes = new DiscountCodes();
        this.discount = 0;
        this._sum = { 
            finalPrice: 0,
            cartDiscountPrice: 0,
            cartPriceNoDiscountCode: 0,
            allItemsAmount: 0,
            allDiscountsPrice: 0
        };    
    }
        
    get items() {
        return cloneDeep(this._items);
    }

    addItem(item: IItem) : void {
        let itemAlreadyInCartData = this._items.find(i => i.item.name === item.name);

        if(itemAlreadyInCartData) {
            this._updateProductAdded(itemAlreadyInCartData, item);    
        }
        else {
            this._items.push({item: item, amount: 1, finalPrice: item.getPriceAfterDiscount(), priceNoDiscounts: item.price});
        }

        this._updateCartSummaryItemAdded(item);
    }

    removeOneItemOfThisName(id: string) : void {
        const dataToRemove = this._findItemDataById(id);

        if(dataToRemove) {
            if(dataToRemove.amount === 1) {
                this.removeAllItemsOfThisName(id);
                return;
            }

            this._updateProductRemoved(dataToRemove);
            this._updateCartSummaryOneItemRemoved(dataToRemove);
        }   
    }

    removeAllItemsOfThisName(id: string) : void {
        const dataToRemove = this._findItemDataById(id);
        const dataToRemoveIndex = this._items.findIndex(i => i.item.id === id);

         if (dataToRemoveIndex > -1) {
            this._items.splice(dataToRemoveIndex, 1);   
            this._updateCartSummarySllItemsOfThisNameRemoved(dataToRemove!);
        }     
    }

    applyDiscountCode(code: string) : void {
        this.discount = this._currentDiscountCodes.getPercentOff(code);
    }

    getFinalPrice(): number {
        return this._sum.finalPrice;
    }

    getPriceNoDiscountCode() : number {
        return this._sum.cartPriceNoDiscountCode;
    }

    getAllDiscountsSumPrice() : number {
        return this._sum.allDiscountsPrice;
    }

    getAllItemsAmount() : number {
        return this._sum.allItemsAmount;
    }

    private _findItemDataById(id: string) : ItemAmountAndPrice | undefined {
        return this._items.find(i => i.item.id === id);
    }
   
    private _calculateFinalPrice() : number {
        const priceNoDiscountCode = this._sum.cartPriceNoDiscountCode;
        const finalPrice = (100 - this.discount) / 100 * priceNoDiscountCode;

        this._updateCartDiscountPrice(priceNoDiscountCode, finalPrice);

        return finalPrice;
    }

    private _updateCartDiscountPrice(priceNoDiscountCode: number, finalPrice: number) {
        this._sum.cartDiscountPrice = priceNoDiscountCode - finalPrice;
    }

    private _updateProductAdded(presentData: ItemAmountAndPrice, item: IItem) {
        presentData.amount++;
        presentData.finalPrice += item.getPriceAfterDiscount();
        presentData.priceNoDiscounts += item.price;
    }

    private _updateProductRemoved(dataToModify: ItemAmountAndPrice) {
        const item = dataToModify.item;
        
        dataToModify.amount--;
        dataToModify.finalPrice -= item.getPriceAfterDiscount();
        dataToModify.priceNoDiscounts -= item.price;
    }

    private _updateCartSummaryItemAdded(item: IItem) {
        const itemPriceAfterDiscount = item.getPriceAfterDiscount();

        this._sum.allItemsAmount++;
        this._sum.cartPriceNoDiscountCode += itemPriceAfterDiscount;
        this._sum.allDiscountsPrice += item.price - itemPriceAfterDiscount;
        this._sum.finalPrice = this._calculateFinalPrice();
    }

    private _updateCartSummaryOneItemRemoved(data: ItemAmountAndPrice) {
        const item = data.item;
        const itemPriceAfterDiscount = item.getPriceAfterDiscount();

        this._sum.allItemsAmount--;
        this._sum.cartPriceNoDiscountCode -= itemPriceAfterDiscount;
        this._sum.allDiscountsPrice -= item.price - itemPriceAfterDiscount;
        this._sum.finalPrice = this._calculateFinalPrice();
    }

    private _updateCartSummarySllItemsOfThisNameRemoved(data: ItemAmountAndPrice) {
        const itemsPriceAfterDiscount = data.finalPrice;

        this._sum.allItemsAmount =- data.amount;
        this._sum.cartPriceNoDiscountCode -= itemsPriceAfterDiscount;
        this._sum.allDiscountsPrice -= data.priceNoDiscounts - data.finalPrice;
        this._sum.finalPrice = this._calculateFinalPrice();
    }
}