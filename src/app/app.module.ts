import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RecipePageComponent } from './recipe-page/recipe-page.component';
import { AllRecipeComponent } from './all-recipe/all-recipe.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { RecipeInfoComponent } from './recipe-info/recipe-info.component';
import { RecipeSearchPipe } from './pipes/recipe-search.pipe';
import { MealTypeComponent } from './meal-type/meal-type.component';
import { TagTypeComponent } from './tag-type/tag-type.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    RecipePageComponent,
    AllRecipeComponent,
    RecipeInfoComponent,
    RecipeSearchPipe,
    MealTypeComponent,
    TagTypeComponent,
    RecipeCardComponent,
    FavouriteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,NgxPaginationModule,FormsModule,BrowserAnimationsModule,
    ToastrModule.forRoot(), 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
