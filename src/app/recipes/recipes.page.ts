import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
      recipes: Recipe[];


  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    //set the undefined array to point to the getAllRecipes method
    //created in the recipes servce.
    this.recipes = this.recipesService.getAllRecipes();

    console.log(this.recipes);
  }

}

