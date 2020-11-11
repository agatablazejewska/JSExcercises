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
        codeAndPercentageOff.percentOff = DiscountValidator.validateDiscountOrChangeToZero(codeAndPercentageOff.percentOff);

        if(this._isCodeAlreadyPresent(codeAndPercentageOff.code)) {
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
        const percentOff = this._discountCodes.find(c => c.code === code)?.percentOff;

        if(!percentOff) {
            console.error('There is no such discount code in the list.');
            return 0;
        }

        return percentOff;
    }

    _isCodeAlreadyPresent(code: string) : boolean {
        return this._discountCodes.some(c => c.code === code);
    }
}