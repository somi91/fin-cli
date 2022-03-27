import { IRecipe } from "./IRecipe";

export interface IDataTable {
    currentPage: number;
    totalPages: number;
    recipes: IRecipe[];
}