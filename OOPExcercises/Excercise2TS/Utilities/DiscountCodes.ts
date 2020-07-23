import { IDiscountCodes } from "../Interfaces/Discounts/IDiscountCodes";
import { DiscountValidator } from "../Common/DiscountValidator";

export class DiscountCodes implements IDiscountCodes {
    private _discountCodes: Map<string, number>;
    
    constructor() {
        this._discountCodes = new Map<string, number>();
    }

    get discountCodes() {
        return this._discountCodes;
    }

    add(code : string, percentOff : number) : void {
        DiscountValidator.validateDiscountOrChangeToDefault(percentOff);
        
        if(!this._checkIfCodePresent(code)) {
            this._discountCodes.set(code, percentOff);
        }     
    }

    remove(code: string): void {
       this._discountCodes.delete(code);
    }

    getPercentOff(code: string): number {
       return this._discountCodes.get(code) || 0; 
    }

    _checkIfCodePresent(code : string) : boolean {
        return this._discountCodes.get(code) ? true : false;
    }
}