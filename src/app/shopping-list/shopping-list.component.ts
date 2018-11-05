import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../ingredient';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  //ingredients: Array<Ingredient>;
  constructor(private shopServ: ShoppingListService) { 
    
    //this.ingredients.push(new Ingredient('Apples',5));
    //this.ingredients.push(new Ingredient('Tomates',3));
    //this.ingredients.push(new Ingredient('Lettuce',8));
  }

  ngOnInit() {
    //this.ingredients = new Array<Ingredient>();
    //this.ingredients = this.shopServ.getIngredients();
  }

  AddIngredient(MyIngredient: Ingredient){
    //alert("adding");
    //this.shopServ.AddIngedient(MyIngredient);
    //this.ingredients.push(MyIngredient);
  }

  onEditItem = (index:number) => {
    //alert("index is " + index);
    this.shopServ.startedEditing.next(index);
  }

   

}
