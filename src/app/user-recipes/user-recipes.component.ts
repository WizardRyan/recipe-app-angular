import {Component, OnInit} from '@angular/core';
import {RecipeService} from '../services/recipe.service';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-user-recipes',
  templateUrl: './user-recipes.component.html',
  styleUrls: ['./user-recipes.component.css']
})
export class UserRecipesComponent implements OnInit {

  recipesPosted = [];


  constructor(public recipeService: RecipeService, public auth: AuthService) {
  }

  ngOnInit() {
    const sub = this.auth.user.subscribe(user => {
      if (user.recipesPosted) {
        this.recipesPosted = user.recipesPosted;
      }
      sub.unsubscribe();
    });
  }

}
