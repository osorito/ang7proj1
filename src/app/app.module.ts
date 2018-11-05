import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { DropdownDirective } from './dropdown.directive';
import { RecipeeService } from './recipee.service';
import { ShoppingListService } from './shopping-list.service';



import { RouterModule, Routes } from '@angular/router';
import { RecipeeStartComponent } from './recipee-start/recipee-start.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RecipeeEditComponent } from './recipee-edit/recipee-edit.component';


const appRoutes: Routes = [
  {path: '', redirectTo:'/recipes', pathMatch: 'full'},  
  {path: 'recipes', component: RecipesComponent, children: [
    {path: '', component: RecipeeStartComponent,pathMatch: 'full' },
    {path: 'new', component:RecipeeEditComponent},
    {path: ':id', component: RecipeDetailComponent, pathMatch: 'full'},
    {path: ':id/edit',component:RecipeeEditComponent}
  ]},
  {path: 'shopinglist',component:ShoppingListComponent, pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    HeaderComponent,
    RecipesComponent,
    DropdownDirective,
    RecipeeStartComponent,
    PageNotFoundComponent,
    RecipeeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [RecipeeService,ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
