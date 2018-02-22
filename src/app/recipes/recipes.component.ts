import {Component, OnInit} from '@angular/core';
import {MatGridList} from '@angular/material';
import {AuthService} from '../services/auth.service';
import {RecipeService} from '../services/recipe.service';
import {Observable} from 'rxjs/Observable';
import {Recipe} from '../interfaces/recipe';
import * as _ from 'lodash';
import {MatSnackBarModule} from '@angular/material';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  // needs to be converted from 1d to 2d array, don't strongly type
  recipeObjects;
  filterBy: string;
<<<<<<< HEAD
  deletedRecipes: Recipe[] = [];
=======
  showDiv: boolean = true;

  toggleDiv() {
    this.showDiv = this.showDiv? false : true;
  }
>>>>>>> b65b4013cc29bfd21b2a77505a925d80e90f98b2

  constructor(public recipeService: RecipeService, public auth: AuthService) {

  }

  ngOnInit() {
    this.recipeService.recipes.subscribe(data => {
      // only add if recipe has a name
      const temp = data.filter(val => val.recipeName);
      this.recipeObjects = _.chunk(temp, 3);
    });
    this.recipeService.forceUpdate();
  }

  deleteRecipe(id) {
    const sub = this.recipeService.getRecipe(id).subscribe(recipe => {
      if (recipe.recipeName) {
        this.deletedRecipes.push(recipe);
      }
      this.recipeService.deleteRecipe(id).then(() => {
        sub.unsubscribe();
      });
    });
  }

  undoDelete() {
    this.auth.addRecipe(this.deletedRecipes.pop(), false);
  }

}
