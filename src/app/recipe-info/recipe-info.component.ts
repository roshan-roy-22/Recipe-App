import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-recipe-info',
  templateUrl: './recipe-info.component.html',
  styleUrls: ['./recipe-info.component.css']
})
export class RecipeInfoComponent implements OnInit {
  recipeId: any;
  recipeInfo: any;

  constructor(private route: ActivatedRoute, private api: ApiService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.recipeId = params.get('id');
      if (this.recipeId) {
        this.getRecipeInfo();
      }
    });
  }

  getRecipeInfo(): void {
    if (this.recipeId) {
      this.api.getRecipeInfoApi(this.recipeId).subscribe((res) => {
        this.recipeInfo = res;
      });
    }
  }
}
