import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-meal-type',
  templateUrl: './meal-type.component.html',
  styleUrls: ['./meal-type.component.css'],
})
export class MealTypeComponent implements OnInit {
  recipeInfo:any
  constructor(private router: ActivatedRoute ,private api:ApiService) {}
  mealType:any;
  ngOnInit(): void {
    this.router.paramMap.subscribe((params) => {
      this.mealType = params.get('meal');
      if (this.mealType) {
        this.getRecipeInfo();
      }
    });
  }

  getRecipeInfo(): void {
    if (this.mealType) {
      this.api.getRecipeByMealApi(this.mealType).subscribe((res:any) => {
        this.recipeInfo = res.recipes;
        console.log(this.recipeInfo);
        
      });
    }
  }

}
