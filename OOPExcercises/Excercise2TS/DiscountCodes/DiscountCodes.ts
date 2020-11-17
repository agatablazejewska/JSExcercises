import { cloneDeep } from 'lodash';
import { IDiscountCodes, codeAndPercentageOffType } from "../Utilities/Interfaces/Discounts/IDiscountCodes";
import { DiscountValidator } from "../Common/DiscountValidator";

export class DiscountCodes implements IDiscountCodes {
    private readonly _discountCodes: Array<codeAndPercentageOffType>;

    constructor() {
        this._discountCodes = new Array<codeAndPercentageOffType>();
    }

    get discountCodes() {
        return cloneDeep(this._discountCodes);
    }

    add(codeAndPercentageOff: codeAndPercentageOffType) : void {
        DiscountValidator.validateDiscount(codeAndPercentageOff.percentOff);

        if(this._isCodeAlreadyAdded(codeAndPercentageOff.code)) {
            console.error('The code already exists.');
            return;
        }

        this._discountCodes.push(codeAndPercentageOff);
    }

    remove(code: string): void {
        const index = this._discountCodes.findIndex(c => c.code === code);

        if (index === -1) {
            console.error('There is no such code in the list.');
            return;
        }

        this._discountCodes.splice(index, 1);
    }

    getPercentOff(code: string): number {
        const foundCode = this._discountCodes.find(c => c.code === code);

        if(!foundCode) {
            throw new Error('There is no such discount code in the list.');
        }

        return foundCode.percentOff;
    }

    _isCodeAlreadyAdded(code: string) : boolean {
        return this._discountCodes.some(c => c.code === code);
    }
}