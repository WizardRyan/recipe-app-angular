import {Injectable} from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
import {Recipe} from '../interfaces/recipe';
import * as firebase from 'firebase/app';

@Injectable()
export class RecipeService {

  recipes: Observable<Recipe[]>;
  recipeConstant: Recipe[];

  constructor(private fireStore: AngularFirestore) {
    const recipesCollection = this.fireStore.collection<Recipe>('recipes');
    this.recipes = recipesCollection.valueChanges();
  }

  getRecipe(id): Observable<Recipe> {
    return this.fireStore.collection<Recipe>('recipes').doc<Recipe>(`${id}`).valueChanges();
  }

  forceUpdate(): void {
    this.fireStore.collection('recipes').add({DELET: true}).then(docRef => {
      this.fireStore.collection('recipes').doc(`${docRef.id}`).delete();
    });
  }

  deleteRecipe(id) {
    return this.fireStore.collection('recipes').doc(`${id}`).delete();
  }
}
