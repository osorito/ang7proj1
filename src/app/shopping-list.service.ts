import { Injectable } from '@angular/core';
import { Ingredient } from './ingredient';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredients: Array<Ingredient>;

  ingtoshop: Array<Ingredient>;

  startedEditing = new Subject<number>();

  constructor() { 
    this.ingredients = new Array<Ingredient>();
    //this.ingredients.push(new Ingredient('Apples',5));
    //this.ingredients.push(new Ingredient('Tomates',3));
    //this.ingredients.push(new Ingredient('Lettuce',9));


    this.ingtoshop = new Array<Ingredient>();
  }

  getIngredients(){
    return this.ingredients;
  }

  AddIngedient(MyIngredient: Ingredient){
    this.ingredients.push(MyIngredient);
  }

  getIngredient(index:number){
    return this.ingredients[index];
  }

  deleteIngredient(myingredient: Ingredient){
    this.ingredients.forEach( (item, index) => {
      if(item === myingredient) this.ingredients.splice(index,1);
    });
  }

  updateIngredient = (index:number,newIng: Ingredient) => {
    this.ingredients[index]=newIng;
  }

  AddShopCart(ingredients: Array<Ingredient>){
    //this.ingtoshop = ingredients;

    //note i use tripple dots here so i can
    // push the array of ingredients 
    // one ingredient at a time
    // this way if i'm buying multiple
    // recipess all the ingredients will
    // be added to the ingredients array
    this.ingredients.push(...ingredients) //= ingredients;
    //alert("list size " + this.ingtoshop.length);
  }

  ClearCart(){
    console.log("Inside service clear cart");
    //this will clear the list
    // and call the garbage collector?
    this.ingredients =  new Array<Ingredient>();
    console.log("now ingredients size ",this.ingredients.length);
  }
  //constructor() { }
}
