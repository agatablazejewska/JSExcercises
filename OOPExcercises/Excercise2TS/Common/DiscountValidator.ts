export abstract class DiscountValidator {
    static validateDiscountOrChangeToZero(discount : number) : number {
        const isProvidedDiscountValid = (discount >= 0 && discount <= 100);

        if(!isProvidedDiscountValid) {
            console.error('Provided discount is invalid and therefore discount is set to 0%.');
            return 0;
        }

        return discount;
    }
}