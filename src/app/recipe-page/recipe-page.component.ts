import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.css']
})
export class RecipePageComponent implements OnInit {
  topRecipe: any = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getRecipe();
  }

  getRecipe() {
    this.api.getRecipes().subscribe((res: any) => {
      console.log(res);
      this.topRecipe = res.recipes.filter((recipe: any) => recipe.rating > 4.8);
      console.log(this.topRecipe); // Log to see the filtered recipes
    });
  }
}
