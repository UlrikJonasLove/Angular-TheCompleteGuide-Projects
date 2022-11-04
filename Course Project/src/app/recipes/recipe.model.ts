import { Ingredient } from "../Shared/models/ingredient.model";

export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredient: Ingredient[];
    
    // the constructor makes it possible to create a new instance of the class Recipe
    constructor(name: string, desc: string, imagePath: string, ingredients: Ingredient[]) {
        // this refers to the properties of the class
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingredient = ingredients;
    }
}