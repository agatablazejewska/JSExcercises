export abstract class DiscountValidator {
    static validateDiscount(discount : number) : void {
        const isProvidedDiscountValid = (discount >= 0 && discount <= 100);

        if(!isProvidedDiscountValid) {
            throw new Error('Provided discount is invalid. Discount should be in the range of 0-100.');
        }
    }
}