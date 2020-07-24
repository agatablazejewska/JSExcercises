import { Categories } from "../../Enums/Categories";

export interface IItemDataOptional {
    name? : string;
    price? : number;
    category? : Categories;  
    discount? : number;
}