import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  // @Input() is used to pass data from parent to child
  @Input() recipe: Recipe; // the recipe property is passed from the parent component, recipe-list component
  // @Output() is used to pass data from child to parent
  // @Output() recipeSelected = new EventEmitter<void>(); // void is used to indicate that this method does not return anything
  @Input() index: number;

  constructor() { }

  ngOnInit(): void {
  }

}
