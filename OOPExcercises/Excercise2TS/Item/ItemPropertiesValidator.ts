import { Helper } from "../../Common/Helper";

export abstract class ItemPropertiesValidator {
    static validatePrice(price: number): void {
        if(price < 0){
            throw new Error("Price can't be a negative value");
        }
    }

    static validateName(name: string): void {
         Helper.validateEmptyString(name);     
    }
}