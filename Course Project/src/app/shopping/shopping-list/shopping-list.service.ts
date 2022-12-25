// import { EventEmitter } from "@angular/core";
import { Ingredient } from "src/app/Shared/models/ingredient.model";
import { Subject } from "rxjs";

export class ShoppingListService {
    // ingredientsChanged = new EventEmitter<Ingredient[]>(); // create a new event emitter that will emit an array of ingredients
    ingredientsChanged = new Subject<Ingredient[]>(); // create a new subject that will emit an array of ingredients
    private ingredients: Ingredient[] = [ // create an array of ingredients
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

    getIngredients() {
        return this.ingredients.slice(); // slice() returns a copy of the array, since this is a copy, the ingredients wont show
        // so we add an event emmitter "ingredientChanged" to emit the ingredients array
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient); // add the new ingredient to the ingredients array
        this.ingredientsChanged.next(this.ingredients.slice()); // next is a method that emits the ingredients array copy
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients); // add the new ingredients to the ingredients array by using the spread operator
        this.ingredientsChanged.next(this.ingredients.slice()); // next is a method that emits the ingredients array copy
    }
}