import { Ingredient } from "./ingredient";

export class Recipee {
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: Array<Ingredient>;

    constructor(name:string,description:string,image:string,ingredients:Array<Ingredient>){
        this.name = name;
        this.description = description;
        this.imagePath = image;
        this.ingredients = new Array<Ingredient>();
        this.ingredients = ingredients;
    }
}
