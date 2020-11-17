import { IItem } from "../Item/IItem";

export type ItemInCartSummary = {
    item: IItem,
    amount: number,
    finalPrice: number,
    priceNoDiscounts: number
}

export interface ICart {
    readonly items : Array<ItemInCartSummary>;
    addItem(item : IItem) : void;
    removeOneItemById(id : string) : void;
    removeAllItemsById(id : string) : void;
    applyDiscountCode(code : string) : void;
    getFinalPrice() : number;
    getAllItemsAmount() : number;
    getPriceNoDiscountCode() : number;
    getAllDiscountsSum() : number;
}