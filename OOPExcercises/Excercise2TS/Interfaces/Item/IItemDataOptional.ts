import { Categories } from "../../Utilities/Categories";

export interface IItemDataOptional {
    name? : string;
    price? : number;
    category? : Categories;  
    discount? : number;
}