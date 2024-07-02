import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  favouriteCount = new BehaviorSubject(0)

  SERVER_URL="https://recipe-backend-1.onrender.com"
  constructor(private http:HttpClient) { }


  registerAPI(user:any){
    return this.http.post(`${this.SERVER_URL}/register`,user)
  }

  loginAPI(user:any){
    return this.http.post(`${this.SERVER_URL}/login`,user)
  }

  getRecipes(){
    return this.http.get('https://dummyjson.com/recipes?limit=50')
  }

  getRecipeInfoApi(id:any){
    return this.http.get(`https://dummyjson.com/recipes/${id}`)
  }

  getRecipeByMealApi(meal:string){
    return this.http.get(`https://dummyjson.com/recipes/meal-type/${meal}`)
  }

  getRecipeByTagApi(tag:string){
    return this.http.get(`https://dummyjson.com/recipes/tag/${tag}`)
  }

  appendTokenHeader(){
    const token = sessionStorage.getItem("token");
    let headers = new HttpHeaders();
    if(token){
      headers = headers.append("Authorization", `Bearer ${token}`);
    }
    return { headers };
  }

  addtoFavoriteAPI(recipe:any){
    return this.http.post(`${this.SERVER_URL}/favorites`,recipe,this.appendTokenHeader())
  }
  
  getAllFavouriteAPI(){
    return this.http.get(`${this.SERVER_URL}/all-favourites`,this.appendTokenHeader())
  }

  getFavouriteCount(){
    this.getAllFavouriteAPI().subscribe((res:any)=>{
      this.favouriteCount.next(res.length)
      
    })
  }

  getRemoveFavourite(id:any){
    return this.http.delete(`${this.SERVER_URL}/remove/${id}`,this.appendTokenHeader())
  }

  isLoggedIn(){
    return !!sessionStorage.getItem("token")
  }

}
