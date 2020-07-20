import uuid4 from "uuid4";
import { IHasPrice } from "../Interfaces/Prices/IHasPrice";
import { IItem } from "../Interfaces/Item/IItem";
import { Categories } from "../Utilities/Categories";
import { IHasDiscount } from "../Interfaces/Prices/IHasDiscount";

export class Item implements IItem {
    private readonly _defaultDiscountIfWrongProvided = 20;
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
        this.discount = this._validateOrChangeToDefault(discount);
    }

    update<IHasPrice>(source: IHasPrice): void {
        Object.assign(this, source);
    }

    show(): void {
        throw new Error("Method not implemented.");
    }
    showAllInfo(): void {
        throw new Error("Method not implemented.");
    }

    get ID() {
        return this._id;
    }

    _validateOrChangeToDefault(discount : number) : number {
        return (discount >= 0 && discount <= 100) ? discount : this._defaultDiscountIfWrongProvided;
    }
    
}