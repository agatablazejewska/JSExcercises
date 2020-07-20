import { IHasPrice } from "../Prices/IHasPrice";
import { Categories } from "../../Utilities/Categories";
import { IHasDiscount } from "../Prices/IHasDiscount";

export interface IItem extends IHasPrice, IHasDiscount {
    name : string;
    category: Categories;  
}