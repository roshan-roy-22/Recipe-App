import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent  implements OnInit {
  favourites:any
  constructor(private api:ApiService){}
ngOnInit(): void {
  this.getFavourites();
}

getFavourites(){
  this.api.getAllFavouriteAPI().subscribe((res)=>{
this.favourites=res
this.api.getFavouriteCount();

  })
}

removeFavourites(id:any){
this.api.getRemoveFavourite(id).subscribe((res)=>{
  console.log(res);
this.getFavourites();
})
}

}
