import {Component, OnInit} from '@angular/core';
import {MatGridList} from '@angular/material';
import {AuthService} from '../services/auth.service';
import {RecipeService} from '../services/recipe.service';
import {Observable} from 'rxjs/Observable';
import {Recipe} from '../interfaces/recipe';
import * as _ from 'lodash';
import {MatSnackBarModule} from '@angular/material';
import {trigger, state, style, transition, animate, keyframes, stagger, query} from '@angular/animations';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  // animations: [
  //   trigger('flyInOut', [
  //
  //     transition('* => *', [
  //
  //       query(':enter', style({opacity: 0}), {optional: true}),
  //
  //       query(':enter', stagger('300ms', [
  //         animate('1s ease-in', keyframes([
  //           style({opacity: 0, transform: 'translateY(-75px)', offset: 0}),
  //           style({opacity: .5, transform: 'translateY(35px)', offset: 0.3}),
  //           style({opacity: 1, transform: 'translateY(0)', offset: 1})
  //         ]))
  //
  //
  //       ]))
  //
  //     ])
  //
  //   ])
  // ]
})
export class RecipesComponent implements OnInit {

  // needs to be converted from 1d to 2d array, don't strongly type
  recipeObjects;
  filterBy: string;
  deletedRecipes: Recipe[] = [];
  showDiv = true;

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
