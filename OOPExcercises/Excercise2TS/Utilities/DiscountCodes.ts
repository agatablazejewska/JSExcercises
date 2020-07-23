import { IDiscountCodes } from "../Interfaces/Discounts/IDiscountCodes";
import { DiscountValidator } from "../Common/DiscountValidator";

export class DiscountCodes implements IDiscountCodes {
    private readonly _discountCodes: Map<string, number>;
    
    constructor() {
        this._discountCodes = new Map<string, number>();
    }

    get discountCodes() {
        return this._discountCodes;
    }

    add(code: string, percentOff : number) : void {
        DiscountValidator.validateDiscountOrChangeToZero(percentOff);
        
        if(!this._discountCodes.has(code)) {
            this._discountCodes.set(code, percentOff);
        }     
    }

    remove(code: string): void {
       this._discountCodes.delete(code);
    }

    getPercentOff(code: string): number {
       return this._checkIfCodePresent(code) ? this._discountCodes.get(code)! : 0; 
    }

    _checkIfCodePresent(code: string) : boolean {
        if(!this._discountCodes.has(code)) {
            console.log(`Code ${code} is not valid`);
            return false;
        }
        
        return true;
    }
}