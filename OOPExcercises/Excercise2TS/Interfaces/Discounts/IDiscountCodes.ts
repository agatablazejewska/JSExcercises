export interface IDiscountCodes {
    discountCodes : Map<string, number>;
    add(code : string, percentOff : number) : void;
    remove(code : string) : void;
    getPercentOff(code : string) : number;
}