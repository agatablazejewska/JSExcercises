export abstract class DiscountValidator {
    static validateDiscountOrChangeToZero(discount : number) : number {
        return (discount >= 0 && discount <= 100) ? discount : 0;
    }
}