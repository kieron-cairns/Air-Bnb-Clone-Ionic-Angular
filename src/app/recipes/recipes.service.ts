import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

   private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://www.thespruceeats.com/thmb/cckc3_4QUQ79kSFhcLPM8xg9F3g=/3797x2848/smart/filters:no_upscale()/wiener-schnitzel-recipe-1447089-Hero-5b587d6c46e0fb0071b0059d.jpg',
      ingredients: ['French Fries', 'Pork Meat', 'Salad']
    },
    {
      id: 'r2',
      title: 'Stragonoff',
      imageUrl: 'https://www.recipetineats.com/wp-content/uploads/2018/01/Beef-Stroganoff_2-1-1.jpg',
      ingredients: ['Russian Potatoes', 'Vodka ;)']
    }
  ];

  constructor() { }

  getAllRecipes() {
    //pulls elemetns from above aray and inputs
    //it into this new one
    return [...this.recipes];
  }

//Below method takes a recipe id as an argument
//and return a specific recipe by it's id

  getRecipe(recipeId: string) {
    //{} wrap array into object and .. means
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }
}
