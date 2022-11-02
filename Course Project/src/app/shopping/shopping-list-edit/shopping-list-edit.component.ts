import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/Shared/models/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild("nameInput", {static: false}) nameInputRef: ElementRef;
  @ViewChild("amountInput", {static: false}) amountInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>(); // this is the event emitter that will be used to pass data from child to parent

  constructor() { }

  ngOnInit(): void {
  }

  onAddItem() {
    // this is the method that will be called when the add button is clicked
    const ingName = this.nameInputRef.nativeElement.value; // get the value of the name input
    const ingAmount = this.amountInputRef.nativeElement.value; // get the value of the amount input
    const newIngredient = new Ingredient(ingName, ingAmount); // create a new ingredient with the name and amount
    this.ingredientAdded.emit(newIngredient); // emit the new ingredient to the parent component
  }

}
