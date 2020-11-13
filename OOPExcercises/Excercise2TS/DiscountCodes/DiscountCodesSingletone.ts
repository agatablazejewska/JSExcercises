import { DiscountCodes } from './DiscountCodes';

export class DiscountCodesSingletone {
    private static _discountCodes: DiscountCodes = new DiscountCodes();

    static get discountCodes() {
        return this._discountCodes;
    }
}