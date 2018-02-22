import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Recipe} from '../interfaces/recipe';
import {RecipeService} from '../services/recipe.service';
import {trigger, state, style, transition, animate, keyframes} from '@angular/animations';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  /*animations: [
    trigger('flyInOut', [transition('void => *', [style({transform:'translateX(-100%)'}), animate('1s')  ]),
    transition('* => void', [animate('1s', style({transform: 'translateX(100%)'}))])
    ])
  ]*/

})
export class DetailsComponent implements OnInit, OnDestroy {

  recipeData: Recipe;
  private sub: any;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.recipeService.getRecipe(params['id']).subscribe(data => {
        this.recipeData = data;
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
