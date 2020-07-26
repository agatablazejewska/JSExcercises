import { Helper } from "../../Common/Helper";

export abstract class ItemPropertiesValidator {
    static validatePriceOrSetToZero(price: number) {
        let finalPrice = price;
        try {
            if(price < 0){
                throw new Error("Price can't be a negative value");
            }
        } catch(e) {
            console.error(`${e}
            Setting price to 0`);

            finalPrice = 0;
        }    

        return finalPrice;
    }

    static validateNameOrSetToDefault(name: string, itemId: string): string {
        let finalName = name;

        try {
            Helper.validateEmptyString(name);
        }
        catch (e) {
            console.error(`${e}
            Setting name to Name${itemId}`);

            finalName = `Name${itemId}`;
        }

        return finalName;
    }
}