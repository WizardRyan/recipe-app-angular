import {Component, OnInit} from '@angular/core';
import {Recipe} from '../interfaces/recipe';
import {AuthService} from '../services/auth.service';
import index from '@angular/cli/lib/cli';

import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  ingredients: number[] = [0];
  currentNum = 1;
  recipeName: string;
  authorName: string;
  cookingDirections: string;
  photoURL: string;
  ingredientNames: string[] = [];

  constructor(public authService: AuthService, public snackbar: MatSnackBar) {

  }

  ngOnInit() {
    // fill ingredientNames with empty strings so index can be accessible without need to push
    for (let i = 0; i < 20; i++) {
      this.ingredientNames.push('');
    }
  }

  addItem() {
    this.ingredients.push(this.currentNum);
    this.currentNum++;

  }

  pushRecipe() {
    let poster;
    const sub = this.authService.user.subscribe(data => {
      poster = data.email;
      const ingredients = this.ingredientNames.filter(ing => ing !== "");

      const recipe: Recipe = {
        recipeCreator: this.authorName,
        recipeName: this.recipeName,
        instructions: this.cookingDirections,
        ingredients,
        photoURL: this.photoURL,
        recipePoster: poster
      };
      this.authService.addRecipe(recipe);
      sub.unsubscribe();
    });
  }

  removeItem() {
    this.ingredients.pop();
    this.currentNum--;
  }


  submitted() {
    this.pushRecipe();
  }


}
