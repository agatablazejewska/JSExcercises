import { Helper } from "../../Common/Helper";
import { DiscountValidator } from "../Common/DiscountValidator";

export abstract class ItemPropertiesValidator {
    static validatePrice(price: number): void {
        if(price < 0){
            throw new Error("Price can't be a negative value");
        }
    }

    static validateName(name: string): void {
        try {
            Helper.validateEmptyString(name);  
        } catch(e) {
            throw new Error("Name of product must have a value and can not consist of white spaces");
        }     
    }

    static validateDiscountOrChangeToZero(discount: number) {
        return DiscountValidator.validateDiscountOrChangeToZero(discount);
    }
}