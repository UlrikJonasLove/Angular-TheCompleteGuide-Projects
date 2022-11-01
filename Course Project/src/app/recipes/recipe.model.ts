export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    
    // the constructor makes it possible to create a new instance of the class Recipe
    constructor(name: string, desc: string, imagePath: string) {
        // this refers to the properties of the class
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
    }
}