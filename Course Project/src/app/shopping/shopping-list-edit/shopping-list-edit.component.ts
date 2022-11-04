import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/Shared/models/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild("nameInput", {static: false}) nameInputRef: ElementRef;
  @ViewChild("amountInput", {static: false}) amountInputRef: ElementRef;

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddItem() {
    // this is the method that will be called when the add button is clicked
    const ingName = this.nameInputRef.nativeElement.value; // get the value of the name input
    const ingAmount = this.amountInputRef.nativeElement.value; // get the value of the amount input
    const newIngredient = new Ingredient(ingName, ingAmount); // create a new ingredient with the name and amount
    this.slService.addIngredient(newIngredient); // add the new ingredient to the shopping list
  }

}
