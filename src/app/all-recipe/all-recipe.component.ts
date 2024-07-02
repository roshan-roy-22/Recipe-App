import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-all-recipe',
  templateUrl: './all-recipe.component.html',
  styleUrls: ['./all-recipe.component.css']
})
export class AllRecipeComponent {
  allRecipe: any = [];
  page:number=1;
  searchKey:string=""
  filterRecipe:any=[]

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getRecipe();
  }

  getRecipe() {
    this.api.getRecipes().subscribe((res: any) => {
      console.log(res);
      this.allRecipe = res.recipes
      console.log(this.allRecipe); // Log to see the filtered recipes
    });
  }

}
