import {Component, OnInit} from '@angular/core';
import {Recipe} from '../interfaces/recipe';
import {AuthService} from '../services/auth.service';
import index from '@angular/cli/lib/cli';

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

  constructor(public authService: AuthService) {

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
    this.authService.user.subscribe(data => {
      poster = data.email;
      const recipe: Recipe = {
        recipeCreator: this.authorName,
        recipeName: this.recipeName,
        instructions: this.cookingDirections,
        ingredients: this.ingredientNames,
        photoURL: this.photoURL,
        recipePoster: poster
      };
      this.authService.addRecipe(recipe);
    });
  }

  removeItem() {
    this.ingredients.pop();
    this.currentNum--;
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
