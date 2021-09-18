import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesPage } from './recipes.page';

//Routing for this page is taken care of in the apps
//main routing file (app-routing.module.ts)
const routes: Routes = [
  {
    path: '',
    component: RecipesPage
  },
  // {
  //   path: 'recipe-detail',
  //   loadChildren: () => import('./recipe-detail/recipe-detail.module').then( m => m.RecipeDetailPageModule)
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipesPageRoutingModule {}
