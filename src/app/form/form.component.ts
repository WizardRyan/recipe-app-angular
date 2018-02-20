import {Component, OnInit} from '@angular/core';
import {Recipe} from '../interfaces/recipe';
import {AuthService} from '../services/auth.service';

import {MatSnackBar} from '@angular/material';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  ingredients: string[] = [];
  currentNum = 1;
  recipeName: string;
  authorName: string;
  cookingDirections: string;
  photoURL: string;
  ingredientNames: string[] = [];
  recipe: "ngModel";
  recipeNameCtrl: FormControl = new FormControl('', [Validators.required]);
  photoURLCtrl:  FormControl = new FormControl('', [Validators.required]);
  authorNameCtrl: FormControl = new FormControl('', [Validators.required]);
  cookingDirectionsCtrl: FormControl = new FormControl('', [Validators.required]);
  ingredientNameCtrl: FormControl = new FormControl('');

  constructor(public authService: AuthService, public snackBar: MatSnackBar) {

  }

  ngOnInit() {
    // // fill ingredientNames with empty strings so index can be accessible without need to push
    // for (let i = 0; i < 20; i++) {
    //   this.ingredientNames.push('');
    // }
  }

  addItem() {
    const ingredient = this.ingredientNameCtrl.value;
    this.ingredientNameCtrl.setValue('');
    this.ingredients.push(ingredient);
  }

  pushRecipe() {
    let poster;
    let success = false;

    const sub = this.authService.user.subscribe(data => {
      poster = data.email;
      const ingredients = this.ingredientNames.filter(ing => ing !== '');

      const recipe: Recipe = {
        recipeCreator: this.authorName,
        recipeName: this.recipeName,
        instructions: this.cookingDirections,
        ingredients,
        photoURL: this.photoURL,
        recipePoster: poster
      };
      this.authService.addRecipe(recipe).then(() => {
        success = true;
        this.submitted(success);
        sub.unsubscribe();
      });
    });
  }

  removeItem(index: number) {
    this.ingredients.splice(index, 1);
  }


  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }


  submitted(success: boolean) {
    if (success) {
      this.openSnackBar('Successfully added recipe!', 'Thank You!');
      this.recipeName = "";
      this.authorName = "";
      this.cookingDirections = "";
      this.photoURL = "";
      this.ingredientNames = [];
      // fill ingredientNames with empty strings so index can be accessible without need to push
      for (let i = 0; i < 20; i++) {
        this.ingredientNames.push('');
      }
    } else {
      this.openSnackBar('Failed to add recipe', 'Try Again');
    }
  } }




