import { Injectable,EventEmitter } from '@angular/core';
import { Recipee } from './recipee';
import { Ingredient } from './ingredient';

@Injectable({
  providedIn: 'root'
})
export class RecipeeService {

  recipees : Array<Recipee>;
  //recipeeSelected = new EventEmitter<Recipee>();

  

  // clearIngredients(){
  //   console.log("Ingredients size",this.ingredients.length);
  //   while(this.ingredients.length){
  //     this.ingredients.pop();
  //   }
  //   console.log("ingredients after",this.ingredients.length);
  // }

  constructor() {
    this.recipees = new Array<Recipee>();
    var ing1 = new Array<Ingredient>();
    ing1.push(new Ingredient('apples',7));
    ing1.push(new Ingredient('onions',12));
    //ingredients1 : Array<Ingredient>;
    //this.ingredients1 = new Array<Ingredient>();
    //this.ingredients1.push(new Ingredient('apples',6));
    //this.ingredients1.push(new Ingredient('Lemmons',12));
    this.recipees.push(new Recipee('Bacon-Wrapped Chicken Tenders','This is the one thing that everyone in my family will eat, regardless of their diet. The combination juicy chicken and crispy bacon is absolutely irresistible ','https://media3.s-nbcnews.com/j/MSNBC/Components/Video/201808/tdy_food_klg_chicken_180828_1920x1080.today-inline-vid-featured-desktop.jpg',
    ing1
    
    ));
    
    //this.clearIngredients();

    //this.ingredients.push(new Ingredient('carrots',6));

    var ing2 = new Array<Ingredient>();
    ing2.push(new Ingredient('meat',2));
    ing2.push(new Ingredient('carrots',12));
    ing2.push(new Ingredient('oranges',4));
    this.recipees.push(new Recipee('Pork Adobo Recipe','Pork Adobo is pork cooked in soy sauce, vinegar, and garlic. This is considered by many as the Philippine’s national dish because of its popularity, ease in preparation, and long storage life. Adobo is not only limited to pork and chicken, other meats, seafoods, and vegetables such as squid, goat meat, veal, beef, shrimp, river spinach can also be cooked this way','https://panlasangpinoy.com/wp-content/uploads/2009/08/Pork-Adobo-.jpg',
    ing2));
    //this.clearIngredients();

   }

  getRecepies(){
     return this.recipees;
  }

  
  findRecipeePos = (MyRecipee: Recipee) => {
    return this.recipees.indexOf(MyRecipee);
    //return this.recipees.find(recipee => recipee.id === id);s
  }

  getRecipeePos = (pos:number) => {
    return this.recipees[pos];
  }
  
  addRecipe = (MyRecipee : Recipee)=> {
    this.recipees.push(MyRecipee);
  }

  updateRecipe = (index:number,newRecipee: Recipee) => {
    this.recipees[index] = newRecipee;
  }

  deleteRecipee = (MyRecipee: Recipee) => {
    //alert("Delete recipee");
    this.recipees.forEach( (item, index) => {
      if(item === MyRecipee) this.recipees.splice(index,1);
    });
  }

}
