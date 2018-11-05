import { Component, OnInit,OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from '../ingredient';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit,OnDestroy {
  @ViewChild('f') myform: NgForm;
  //@Output() AddedIngredient = new EventEmitter<Ingredient>();

  name: string;
  amount: number;
  subscription : Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private shopser:ShoppingListService) { }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    //this.name="";
    //this.amount = 0;
    this.subscription = this.shopser.startedEditing.subscribe(
      (index:number)=>{
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedItem = this.shopser.getIngredient(index);
        console.log("Ingredient name",this.editedItem.name);
        this.myform.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
      }
    );
  }

  ClearIngredients() {
    // console.log("clear ingredients");
    // this.shopser.ClearCart();
    this.myform.reset();
    this.editMode=false;

  }


  onSubmit = (form: NgForm) => {
    const value = form.value;
    if(this.editMode){
      this.shopser.updateIngredient(this.editedItemIndex,new Ingredient(value.name,value.amount));
    }else{
      this.AddIngredient(value.name,value.amount);
    }
    this.myform.setValue({
      name:'',
      amount:''
    });
    this.editMode=false;
     
    
  }


  onDelete = () => {
    //this.editedItemIndex = index;
    //this.editedItem = this.shopser.getIngredient(index);
    if(this.editMode){
      this.shopser.deleteIngredient(this.editedItem);
      this.editMode = false;
      this.myform.reset();
    }else{alert("First select an ingredient");}
    
  }

  AddIngredient = (name: string,ammount:number) => {

    //console.log("name",this.name,"amount",this.amount);
   //console.log("Name ", this.name, "amount ", this.amount); 
    if((name.length>0)&&(ammount>0)){
      //console.log("Sending New Ingredient");
      //this.AddedIngredient.emit(new Ingredient(this.name,this.amount));
      this.shopser.AddIngedient(new Ingredient(name,ammount));
      //this.name="";
      //this.amount=0;
    }else{
      //console.log("name",this.name,"amount",this.amount);
      if(name.length==0){
        alert("Please type the name of the ingredient");
        return;
      }
      if(ammount<=0){
        alert("The ammount must be greater than zero");
        return;
      }
    }
    
  }

}
