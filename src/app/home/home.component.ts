import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  categoryDatas=[{
    category:"Dessert",
    imgUrl:"https://pinchofyum.com/cdn-cgi/image/width=360,height=514,fit=crop/wp-content/uploads/Smores-Bars-6-Featured.jpg",
    url:'dessert'
  },
  {
    category:"Snacks",
    imgUrl:"https://pinchofyum.com/cdn-cgi/image/width=360,height=514,fit=crop/wp-content/uploads/pickled-strawberries-5-scaled.jpg",
    url:'snack'
  },
  {
    category:"Lunch",
    imgUrl:"https://images.pexels.com/photos/1833337/pexels-photo-1833337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    url:'lunch'
  },
  {
    category:"Dinner",
    imgUrl:"https://images.pexels.com/photos/1564534/pexels-photo-1564534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    url:'dinner'
  }]

  cuisineData=[
    {
      country:"Ialian",
      imgUrl:"https://images.pexels.com/photos/13814644/pexels-photo-13814644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      url:"italian"
    },
    {
      country:"Pizza",
      imgUrl:"https://images.pexels.com/photos/3297367/pexels-photo-3297367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      url:"pizza"
    },{
      country:"Chicken",
      imgUrl:"https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=600",
      url:"chicken"
    },{
      country:"Salsa",
      imgUrl:"https://images.pexels.com/photos/15434314/pexels-photo-15434314/free-photo-of-burrito-served-in-a-restaurant.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      url:"salsa"
    },{
      country:"Pakistani",
      imgUrl:"https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      url:"pakistani"
    },{
      country:"Indian",
      imgUrl:"https://images.pexels.com/photos/277253/pexels-photo-277253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      url:"indian"
    },{
      country:"Asian",
      imgUrl:"https://images.pexels.com/photos/14016727/pexels-photo-14016727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      url:"asian"
    },{
      country:"Cookies",
      imgUrl:"https://images.pexels.com/photos/5774079/pexels-photo-5774079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      url:"cookies"
    },
  ]

}
