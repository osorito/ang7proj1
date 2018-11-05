import { Component, OnInit } from '@angular/core';
//import { Recipee } from '../recipee';
import { RecipeeService } from '../recipee.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  
  constructor(private recipeeSer: RecipeeService) { }

  ngOnInit() {
    // this.recipeeSer.recipeeSelected.subscribe((recipee: Recipee)=>{
    //   this.selectedRecipee = recipee;
    // });


  }

}
