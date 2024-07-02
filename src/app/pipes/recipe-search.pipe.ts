import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recipeSearch'
})
export class RecipeSearchPipe implements PipeTransform {

  transform(allRecipes: any[], searchString: string): any[] {
    if (!allRecipes || !searchString) {
      return allRecipes;
    }

    searchString = searchString.toLowerCase();

    return allRecipes.filter(recipe => 
      recipe.name.toLowerCase().includes(searchString) ||
      recipe.cuisine.toLowerCase().includes(searchString) ||
      (recipe.tags && recipe.tags.some((tag: string) => tag.toLowerCase().includes(searchString))) ||
      (recipe.mealType && recipe.mealType.some((meal: string) => meal.toLowerCase().includes(searchString))) ||
      (recipe.ingredients && recipe.ingredients.some((ingredient: string) => ingredient.toLowerCase().includes(searchString)))
    );
  }
}
