import {Recipe} from './recipe';

export interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
  recipeData: Recipe;
}
