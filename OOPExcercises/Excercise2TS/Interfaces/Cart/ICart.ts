import { IItem } from "../Item/IItem";

export type ItemAmountAndPrice = {
    item: IItem,
    amount: number,
    finalPrice: number,
    priceNoDiscounts: number
}

export interface ICart {
    readonly items : Array<ItemAndAmount>;
    addItem(item : IItem) : void;
    removeItem(id : string) : void;
    applyDiscountCode(code : string) : void;
    getFinalPrice() : number;
    getAllItemsAmount() : number;
    getPriceNoDiscounts() : number;
    getAllDiscountsSumPrice() : number;
}