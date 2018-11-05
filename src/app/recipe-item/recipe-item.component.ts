import { Component, OnInit, Input  } from '@angular/core';

import { Recipee } from '../recipee';
import { RecipeeService } from '../recipee.service';
import { Router } from '@angular/router';
//import { EventEmitter } from 'events';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() MyRecipee : Recipee;
  @Input() index : number;
  //@Output() SelectedRecipee = new EventEmitter<void>();
  constructor(private recepiSer: RecipeeService,
    private router: Router
    ) { }

  SelectRecipee = () => {
    //alert("selected" + this.MyRecipee.name);
    //this.SelectedRecipee.emit();
    //this.recepiSer.recipeeSelected.emit(this.MyRecipee);
  
    var pos = this.recepiSer.findRecipeePos(this.MyRecipee);
    //console.log("pos ",pos);
    //this.index = pos;
    //alert("position " + pos);
    //console.log("Position",pos,"Index",this.index);
    
    this.router.navigate(['/recipes/'+pos]);

  }

  ngOnInit() {
    //this.index = 0;
  }

}
