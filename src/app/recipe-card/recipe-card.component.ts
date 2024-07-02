import { Component, Input } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent {
  constructor(private api: ApiService,private toaster:ToastrService){}
  @Input() recipe: any;
  adddToFavourite(recipe: any) {
    if (sessionStorage.getItem('token')) {
      // proceed to wishlist
      this.api.addtoFavoriteAPI(recipe).subscribe({
        next: (res: any) => {
          this.toaster.success(` '${res.name}' added to your favourites`);
          this.api.getFavouriteCount();
        },
        error: (reason: any) => {
          console.log(reason);
          this.toaster.warning(reason.error);
        },
      });
    } else {
      this.toaster.error('Please Login');
    }
  }

}
