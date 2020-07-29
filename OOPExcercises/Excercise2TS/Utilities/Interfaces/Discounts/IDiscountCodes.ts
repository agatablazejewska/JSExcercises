export type codeAndPercentageOffType = {
    code: string, 
    percentOff: number
};

export interface IDiscountCodes {
    discountCodes : Array<codeAndPercentageOffType>;
    getPercentOff(code : string) : number;
}