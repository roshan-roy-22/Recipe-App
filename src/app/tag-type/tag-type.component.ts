import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tag-type',
  templateUrl: './tag-type.component.html',
  styleUrls: ['./tag-type.component.css']
})
export class TagTypeComponent {
  recipeInfo:any
  constructor(private router: ActivatedRoute ,private api:ApiService) {}
  tagType:any;
  ngOnInit(): void {
    this.router.paramMap.subscribe((params) => {
      this.tagType = params.get('tag');
      if (this.tagType) {
        this.getRecipeInfo();
      }
    });
  }

  getRecipeInfo(): void {
    if (this.tagType) {
      this.api.getRecipeByTagApi(this.tagType).subscribe((res:any) => {
        this.recipeInfo = res.recipes;
        console.log(this.recipeInfo);
        
      });
    }
  }
}
