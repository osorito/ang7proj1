import { Component, OnInit } from '@angular/core';
import { Recipee } from '../recipee';
import { ShoppingListService } from '../shopping-list.service';
//import { Ingredient } from '../ingredient';

import { ActivatedRoute, Router, Params } from '@angular/router';
import { RecipeeService } from '../recipee.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  //@Input() 
  MyRecipee: Recipee;
  id: number;
  //ingredients: Array<Ingredient>;
  
  constructor(private shopser: ShoppingListService,
    private route: ActivatedRoute,
    private recipeeserv: RecipeeService,
    private router: Router
    
    
    
    ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params)=>{
      this.id = +params['id'];
      this.MyRecipee = this.recipeeserv.getRecipeePos(this.id);
     
      
    });
    //this.ingredients = new Array<Ingredient>();
    //this.ingredients = this.MyRecipee.ingredients;
  }

  toShopList(){
    //alert("to shopping list");
    this.shopser.AddShopCart(this.MyRecipee.ingredients);
  }

  editRecipee = () => {
    var id = this.recipeeserv.findRecipeePos(this.MyRecipee);
    this.router.navigate(['/recipes/'+id+'/edit']);
  }

  deleteRecipee = () => {
    this.recipeeserv.deleteRecipee(this.MyRecipee);
    this.router.navigate(['/recipes']);
  }

}
