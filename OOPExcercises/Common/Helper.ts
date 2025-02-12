import { IHasID } from "./IHasID";

export abstract class Helper {
    static formatDate(date : Date) : string {
    
        const fullDate : string = `${date.getDate()}-${
            date.getMonth() + 1
        }-${date.getFullYear()}`;
    
        const time : string = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    
        return `${fullDate} ${time}`;
    }

    static removeFromArray<T extends IHasID>(elementId: string, array : Array<T>) : void {
        const index = array.findIndex(element => element.id === elementId);

        if (index === -1) {
            throw new Error(`There is no such element in the array.`);
        }

        array.splice(index, 1);
    }

    static removeStringFromStringsArray(str: string, array: Array<string>) {
        const index = array.findIndex(s => s === str);

        if (index > -1) {
            array.splice(index, 1);
        }
    }

    //FilterByPhrase
    static filterByPhrase<T extends object, U extends keyof T>(phrase : string, array : Array<T>, objKeyToFilterBy : U) : Array<T> {    
        const phraseLowerCase = phrase.toLowerCase();

       return array.filter(element => {
            return this._filterByPhraseLogic<T, U>(element, objKeyToFilterBy, phraseLowerCase);
        });
    }

    private static _filterByPhraseLogic<T extends object, U extends keyof T>(element: T, objKeyToFilterBy: U, phraseLowerCase: string) : boolean {
        const value = element[objKeyToFilterBy];

        try {
            if (typeof value !== "string") {
                throw new TypeError("Value of given key is not a string and therefore it is impossible to filter it by phrase");
             } else {
                 return value.toLowerCase().includes(phraseLowerCase);
             }
        }
        catch(e) {
           console.error(e);
        }   
        
        return false;
    }

     //Sort
    static sortByProperty<T extends object, U extends keyof T>(array : Array<T>, objKeyToSortBy : U) : Array<T> {
        return array.sort((elem1, elem2) => this._sortByPropertyLogic<T, U>(elem1, elem2, objKeyToSortBy));
    }

    private static _sortByPropertyLogic<T extends object, U extends keyof T>(AElement : T, BElement : T, objKeyToSortBy : U) : number {
        let AValue;
        let BValue;
        const firstValue = AElement[objKeyToSortBy];
        const secondValue = BElement[objKeyToSortBy];

        Helper._checkIfPrimitiveType<T, U>(firstValue);

        ({ AValue, BValue } = Helper._evaluateFinalValues<T, U>(firstValue, secondValue));

        if (AValue < BValue) {
        return -1;
        }

        if (AValue > BValue) {
        return 1;
        }

        return 0;
    }

    private static _evaluateFinalValues<T extends object, U extends keyof T>(firstValue: T[U], secondValue: T[U]) {
        let AValue;
        let BValue;

        if (typeof firstValue === "string" && typeof secondValue === "string") {
            AValue = firstValue.toLowerCase();
            BValue = secondValue.toLowerCase();
        } else {
            AValue = firstValue;
            BValue = secondValue;
        }
        
        return { AValue, BValue };
    }

    private static _checkIfPrimitiveType<T extends object, U extends keyof T>(firstValue: T[U]) {
        try {
            if (typeof firstValue !== "number" && typeof firstValue !== "string" && typeof firstValue !== "boolean") {
                throw new TypeError("Value of given key is not a number nor string, nor boolean and therefore it can't be compared in this function");
            }
        }
        catch (e) {
            console.error(e);
        }
    }

    //find
    static findById<T extends IHasID>(id: string, array: Array<T>): T {
        const element = array.find(elem => elem.id === id);
        if(!element) {
            throw new Error("Couldn't find element with provided ID.");
        }

        return element;
    }
}