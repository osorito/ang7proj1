import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeeService } from '../recipee.service';
import { Ingredient } from '../ingredient';
import { Recipee } from '../recipee';


@Component({
  selector: 'app-recipee-edit',
  templateUrl: './recipee-edit.component.html',
  styleUrls: ['./recipee-edit.component.css']
})
export class RecipeeEditComponent implements OnInit {



  id: number;
  editMode = false;
  recipeForm: FormGroup;
  constructor(private route: ActivatedRoute,
              private recipeeserv: RecipeeService,
              private router: Router
    ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params)=> {
      this.id = +params['id'];
      this.editMode = params['id']!=null ;
      this.initForm();
      console.log("edit",this.editMode);
    });
  }

  private initForm(){
    
    let recipeeName='';
    let recipeeImagePath = '';
    let recipeeDescription ='';
    let recipeIngredients = new FormArray([]);

    if(this.editMode){
      const recipee = this.recipeeserv.getRecipeePos(this.id);
      recipeeName = recipee.name;
      recipeeImagePath = recipee.imagePath;
      recipeeDescription = recipee.description;
      recipee.ingredients.map(
        (myingredient: Ingredient)=>{
          recipeIngredients.push(
            new FormGroup(
              {
                'name': new FormControl(myingredient.name,Validators.required),
                'amount': new FormControl(myingredient.amount,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
              }
            )
          );
        }
      );
    }
    this.recipeForm = new FormGroup(
      {
        'name': new FormControl(recipeeName,Validators.required),
        'imagePath': new FormControl(recipeeImagePath, Validators.required),
        'description': new FormControl(recipeeDescription,Validators.required),
        'ingredients': recipeIngredients
      }
    );
  }

  onDeleteIngredient = (index:number) => {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

  onSubmit = () => {
    //console.log(this.recipeForm);
    if(this.editMode){
      this.recipeeserv.updateRecipe(this.id,new Recipee(
        this.recipeForm.value['name'],
        this.recipeForm.value['description'],
        this.recipeForm.value['imagePath'],
        this.recipeForm.value['ingredients']
      ))
    }else{
      this.recipeeserv.addRecipe(new Recipee(
        this.recipeForm.value['name'],
        this.recipeForm.value['description'],
        this.recipeForm.value['imagePath'],
        this.recipeForm.value['ingredients']
      ));
    }
    this.router.navigate(['../'], {relativeTo: this.route});

  }

  onCancel = () => {
    this.recipeForm.reset();
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onAddIngredient = () => {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null,Validators.required),
        'amount': new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    );
  }

}
