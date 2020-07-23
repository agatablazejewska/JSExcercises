import uuid4 from "uuid4";
import { IItem } from "../Interfaces/Item/IItem";
import { Categories } from "../Utilities/Categories";
import { DiscountValidator } from "../Common/DiscountValidator";


export class Item implements IItem {
    private readonly _id: string;
    name: string;
    category: Categories;
    price: number;
    discount: number;

    constructor(name: string, category : Categories, price : number, discount = 0) {
        this._id = uuid4();
        this.name = name;
        this.category = category;
        this.price = price;
        this.discount = DiscountValidator.validateDiscountOrChangeToZero(discount);
    }

    get id() {
        return this._id;
    }

    getPriceAfterDiscount() : number {
        return (100 - this.discount) / 100 * this.price;
    }

    update<IItemDataOptional>(source: IItemDataOptional) : void {
        Object.assign(this, source);
    }

    show() : void {
        console.log(`${this.name}
         ${this.price} $`);
    }

    showAllInfo() : void {
        console.log(`${this.name}
         Price: ${this.price} $
         Category: ${this.category}
         Discount: ${this.discount}%`);
    }
}