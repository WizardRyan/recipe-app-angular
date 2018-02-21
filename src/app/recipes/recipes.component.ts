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
  showDiv: boolean = true;

  toggleDiv() {
    this.showDiv = this.showDiv? false : true;
  }

  constructor(public recipeService: RecipeService) {

  }

  ngOnInit() {
    this.recipeService.recipes.subscribe(data => {
      // only add if recipe has a name
      const temp = data.filter(val => val.recipeName);
      this.recipeObjects = _.chunk(temp, 3);
    });
    this.recipeService.forceUpdate();
  }

  deleteRecipe(id){
    this.recipeService.deleteRecipe(id);
  }

}
