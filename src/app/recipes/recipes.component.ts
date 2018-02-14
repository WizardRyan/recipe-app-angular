import {Component, OnInit} from '@angular/core';
import {MatGridList} from '@angular/material';
import {AuthService} from '../services/auth.service';
import {RecipeService} from '../services/recipe.service';
import {Observable} from 'rxjs/Observable';
import {Recipe} from '../interfaces/recipe';
import * as _ from 'lodash';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipeObjects;

  constructor(public recipeService: RecipeService) {

  }

  ngOnInit() {
    this.recipeService.recipes.subscribe(data => {
      this.recipeObjects = _.chunk(data, 3);
    });
  }

}
