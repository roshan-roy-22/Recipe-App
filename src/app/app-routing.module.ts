import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RecipePageComponent } from './recipe-page/recipe-page.component';
import { AllRecipeComponent } from './all-recipe/all-recipe.component';
import { RecipeInfoComponent } from './recipe-info/recipe-info.component';
import { MealTypeComponent } from './meal-type/meal-type.component';
import { TagTypeComponent } from './tag-type/tag-type.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { authGuard } from './gaurds/auth.guard';
import { loggedInGuard } from './gaurds/logged-in.guard';

const routes: Routes = [
  {
    path:'register',
    component:RegisterComponent,
    canActivate:[loggedInGuard]
  },
  {
    path:'login',
    component:LoginComponent,
    canActivate:[loggedInGuard]
  },
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'recipe',
    component:RecipePageComponent
  },
  {
    path:'all-recipe',
    component:AllRecipeComponent
  },{
    path:'recipe-info/:id',
    component:RecipeInfoComponent
  },{
    path:'meal-type/:meal',
    component:MealTypeComponent
  },{
    path:'tag-type/:tag',
    component:TagTypeComponent
  },{
    path:'favourite',
    component:FavouriteComponent,
    canActivate:[authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
