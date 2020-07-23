import { Categories } from "../../Utilities/Categories";
import { IUpdatableAndReadable } from "../../../Common/IUpdatableAndReadable";
import { IHasID } from "../../../Common/IHasID";

export interface IItem extends IUpdatableAndReadable, IHasID {
    readonly name : string;
    readonly price : number;
    readonly category : Categories;  
    readonly discount : number;
    getPriceAfterDiscount() : number;
}