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
    removeOneItemOfThisType(id : string) : void;
    removeAllItemsOfThisType(id : string) : void;
    applyDiscountCode(code : string) : void;
    getFinalPrice() : number;
    getAllItemsAmount() : number;
    getPriceNoDiscountCode() : number;
    getAllDiscountsSum() : number;
}