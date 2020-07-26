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
        this.discount = ItemPropertiesValidator.validateDiscountOrChangeToZero(discount);        
    }

    get id() {
        return this._id;
    }

    getPriceAfterDiscount() : number {
        return (100 - this.discount) / 100 * this.price;
    }

    update(source: IItemDataOptional) : void {
        try {
            Helper.validateStringProperties(source);
            Object.assign(this, source);
        } catch {
            console.error("One of data provided consists of white spaces. Update failed.");
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