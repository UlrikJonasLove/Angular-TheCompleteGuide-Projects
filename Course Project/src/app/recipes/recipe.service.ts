import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../Shared/models/ingredient.model";
import { ShoppingListService } from "../shopping/shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable() // we can now inject this service into other components
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    // create an array of recipes, only Recipes can be added to this array since its a type of Recipe
    private recipes: Recipe[] = [
        new Recipe(
          'Snitzel',
          'Desciption of first recipe',
          'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]  // create an array of ingredients  
        ),
        new Recipe(
          'Burger',
          'Description of the second recipe',
          'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
        [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 1)
        ])
      ];

      constructor(private slService: ShoppingListService) { }

        getRecipes() {
            // slice() returns a copy of the array
            return this.recipes.slice();
        }

        getRecipe(id: number) {
          return this.recipes[id]; // return recipe by id/index
        }

        addIngredientsToShoppingList(ingredients: Ingredient[]) {
            this.slService.addIngredients(ingredients);
        }
}