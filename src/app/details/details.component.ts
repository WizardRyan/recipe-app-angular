import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Recipe} from '../interfaces/recipe';
import {RecipeService} from '../services/recipe.service';
import {trigger, state, style, transition, animate, keyframes} from '@angular/animations';
import {RecipeComment} from '../interfaces/comment';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
 // animations: [
    // trigger('flyInOut', [transition('void => *', [style({transform: 'translateX(-100%)'}), animate('1s')]),
    //   transition('* => void', [animate('1s', style({transform: 'translateX(100%)'}))])

  /*animations: [
    trigger('flyInOut', [transition('void => *', [style({transform:'translateX(-100%)'}), animate('1s')  ]),
    transition('* => void', [animate('1s', style({transform: 'translateX(100%)'}))])
>>>>>>> f6c259a24882e3f0ccb9689d117ee8bf24b25c4c
    ])
  ]*/

})
export class DetailsComponent implements OnInit, OnDestroy {

  recipeData: Recipe;
  private sub: any;
  commentContent: string;
  comments: RecipeComment[] = [];

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

  postComment(id, poster) {
    this.recipeService.addComment(id, poster, this.commentContent);
    this.commentContent = '';
  }
}
