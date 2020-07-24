import { IDiscountCodes, codeAndPercentageOffType } from "../Interfaces/Discounts/IDiscountCodes";
import { DiscountValidator } from "../Common/DiscountValidator";

export class DiscountCodes implements IDiscountCodes {
    private readonly _discountCodes: Array<codeAndPercentageOffType>;
    
    constructor() {
        this._discountCodes = new Array<codeAndPercentageOffType>();
    }

    get discountCodes() {
        return this._discountCodes;
    }

    add(codeAndPercentageOff: codeAndPercentageOffType) : void {
        DiscountValidator.validateDiscountOrChangeToZero(codeAndPercentageOff.percentOff);
        
        if(!this._discountCodes.some(c => c.code === codeAndPercentageOff.code)) {
            this._discountCodes.push(codeAndPercentageOff);
        }     
    }

    remove(code: string): void {
        const index = this._discountCodes.findIndex(c => c.code === code);

        if (index > -1) {
            this._discountCodes.splice(index, 1);
        }
    }

    getPercentOff(code: string): number {
        const percentOff = this._discountCodes.find(c => c.code === code)?.percentOff;
        return percentOff || 0; 
    }

    _checkIfCodePresent(code: string) : boolean {
        if(!this._discountCodes.find(c => c.code === code)) {
            console.log(`Code ${code} is not valid`);
            return false;
        }
        
        return true;
    }
}