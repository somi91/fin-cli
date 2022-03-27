
export interface IRecipe {
    id: number;
    title: string;
    description: string;
    ingredients: {name: string, amount: number, unit?: string}[];
    created: string;
    modified: string;
}