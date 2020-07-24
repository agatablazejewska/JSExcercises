export type codeAndPercentageOffType = {
    code: string, 
    percentOff: number
};

export interface IDiscountCodes {
    discountCodes : Array<codeAndPercentageOffType>;
    add(codeAndPercentageOff: codeAndPercentageOffType) : void;
    remove(code : string) : void;
    getPercentOff(code : string) : number;
}