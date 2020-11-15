import { v4 as uuidv4 } from 'uuid';
import { DiscountValidator } from '../Common/DiscountValidator';
import { IItem } from "../Utilities/Interfaces/Item/IItem";
import { Categories } from "../Utilities/Enums/Categories";
import { ItemPropertiesValidator } from "./ItemPropertiesValidator";
import { IItemDataOptional } from "../Utilities/Interfaces/Item/IItemDataOptional";
import { CommonValidator } from "../../Common/CommonValidator";


export class Item implements IItem {
    private readonly _id: string;
    name: string;
    category: Categories;
    price: number;
    discount: number;

    constructor(name: string, category : Categories, price : number, discount = 0) {
        ItemPropertiesValidator.validateName(name);
        ItemPropertiesValidator.validatePrice(price);
        DiscountValidator.validateDiscount(discount);

        this._id = uuidv4();
        this.category = category;
        this.name = name;
        this.price = price;
        this.discount = discount;
    }

    get id() {
        return this._id;
    }

    getPriceAfterDiscount() : number {
        return (100 - this.discount) / 100 * this.price;
    }

    update(source: IItemDataOptional) : void {
        try {
            this._validateBeforeUpdate(source);

            Object.assign(this, source);
        } catch(e) {
            console.error(e.message);
        }     
    }

    private _validateBeforeUpdate(source: IItemDataOptional) {
        CommonValidator.validateStringProperties(source);

        if (source.price) {
            ItemPropertiesValidator.validatePrice(source.price);
        }

        if (source.discount) {
            DiscountValidator.validateDiscount(source.discount);
        }
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