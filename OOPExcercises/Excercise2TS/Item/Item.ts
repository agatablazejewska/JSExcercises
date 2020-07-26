import uuid4 from "uuid4";
import { IItem } from "../Utilities/Interfaces/Item/IItem";
import { Categories } from "../Utilities/Enums/Categories";
import { DiscountValidator } from "../Common/DiscountValidator";
import { ItemPropertiesValidator } from "./ItemPropertiesValidator";
import { IItemDataOptional } from "../Utilities/Interfaces/Item/IItemDataOptional";
import { Helper } from "../../Common/Helper";


export class Item implements IItem {
    private readonly _id: string;
    name: string;
    category: Categories;
    price: number;
    discount: number;

    constructor(name: string, category : Categories, price : number, discount = 0) {
        ItemPropertiesValidator.validateName(name);
        ItemPropertiesValidator.validatePrice(price);

        this._id = uuid4();
        this.category = category;
        this.name = name;
        this.price = price;
        this.discount = DiscountValidator.validateDiscountOrChangeToZero(discount);        
    }

    get id() {
        return this._id;
    }

    getPriceAfterDiscount() : number {
        return (100 - this.discount) / 100 * this.price;
    }

    update(source: IItemDataOptional) : void {
        this._validateUpdateData(source);
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

    private _validateUpdateData(source: IItemDataOptional) {
        if (!Helper.isNullOrUndefined(source.name)) {
            ItemPropertiesValidator.validateName(source.name!);
        }

        if (!Helper.isNullOrUndefined(source.price)) {
            ItemPropertiesValidator.validatePrice(source.price!);
        }

        if (!Helper.isNullOrUndefined(source.discount)) {
            source.discount = DiscountValidator.validateDiscountOrChangeToZero(source.discount!);
        }
    }
}