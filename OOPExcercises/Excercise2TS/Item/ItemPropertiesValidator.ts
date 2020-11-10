import { DiscountValidator } from "../Common/DiscountValidator";
import { CommonValidator } from "../../Common/CommonValidator";

export abstract class ItemPropertiesValidator {
    static validatePrice(price: number): void {
        if(price < 0){
            throw new Error("Price can't be a negative value");
        }
    }

    static validateName(name: string): void {
        try {
            CommonValidator.validateEmptyString(name);  
        } catch(e) {
            throw new Error("Name of product must have a value and can not consist of white spaces");
        }     
    }

    static validateDiscountOrChangeToZero(discount: number) {
        return DiscountValidator.validateDiscountOrChangeToZero(discount);
    }

    static validateDiscountBeforeUpdate(discount: number) {
        if(discount < 0 || discount > 100) {
            throw new Error('Discount should be in the range of 0 and 100.');
        }
    }
}