import { IItem } from "../Item/IItem";

export type ItemAmountAndPrice = {
    item: IItem,
    amount: number,
    finalPrice: number,
    priceNoDiscounts: number
}

export interface ICart {
    readonly items : Array<ItemAmountAndPrice>;
    addItem(item : IItem) : void;
    removeItemOne(id : string) : void;
    removeItemAll(id : string) : void;
    applyDiscountCode(code : string) : void;
    getFinalPrice() : number;
    getAllItemsAmount() : number;
    getPriceNoDiscountCode() : number;
    getAllDiscountsSumPrice() : number;
}