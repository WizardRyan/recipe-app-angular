export interface Recipe {
  recipeCreator: string;
  recipePoster: string;
  recipeName: string;
  ingredients: string[];
  instructions: string;
  photoURL: string;
  id?: string;
}
