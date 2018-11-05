import { Component, OnInit } from '@angular/core';

import { Recipee } from '../recipee';
import { RecipeeService } from '../recipee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  //@Output() recipeeWasSelected = new EventEmitter<Recipee>();

  recipees : Array<Recipee>;
  constructor(private recepSer: RecipeeService,
              private router: Router
    ) 
  { 
    
  }

  ngOnInit() {
    this.recipees = new Array<Recipee>();
    this.recipees = this.recepSer.getRecepies();
    
  }

  addRecipee = () => {
    //alert("Add Recipee");
    this.router.navigate(['/recipes/new']);
  }

}
