// Pseudoclassical Method



function CreateAnimal(location, noOfLegs){
    this.anlocation = location;
    this.noOfLegs = noOfLegs;
}

CreateAnimal.prototype = {
    eat: function(){
        console.log(`I live in ${this.anlocation} and I can eat`)
    },
    changeLocation: function(newLoc){
        return this.anlocation = newLoc;
    },
    summary: function (){
        return `I live in ${this.anlocation} and I have ${this.numberOfLegs}`
    }
}



let kangaroo = new CreateAnimal(`Australia`, 2)
console.log(kangaroo);
kangaroo.eat();


//DOG


function CreateDog (name, color, anlocation, noOfLegs){
    CreateAnimal.apply(this, [anlocation, noOfLegs])
    this.name = name;
    this.color = color;
}

CreateDog.prototype = {
    bark: function(){
        console.log(`I am ${this.name} and I can bark 🐶`)
    },
    changeName: function(newName){
        return this.name = newName;
    },
    changeColor: function(newColor){
        return this.color = newColor;
    },
    summary: function (){
        return `I am  ${this.name} and I am of ${this.color} color. I can also bark`
    }
}

Object.setPrototypeOf(CreateDog.prototype, CreateAnimal.prototype);



let pochi = new CreateDog(`pochi`, `brown`,`India`, 4);

console.log(pochi);

pochi.eat();

//cat

//DOG
let catMethods = {

}

function CreateCat (name, colorofEyes, anlocation, noOfLegs){
    CreateAnimal.call(this, anlocation, noOfLegs);
    this.name = name;
    this.colorOfEyes = colorofEyes;
}

CreateCat.prototype = {
    meow: function(){
        console.log(`I am ${this.name} and I can meow 🐶`)
    },
    changeName: function(newName){
        return this.name = newName;
    },
    changeColorOfEyes: function(newColor){
        return this.color = newColor;
    },
    summary: function (){
        console.log(`I am  ${this.name} and the color of my Eyes is ${this.colorOfEyes}. I can also do meow meow`
        );
    }
}


Object.setPrototypeOf(CreateCat.prototype, CreateAnimal.prototype);

let loki = new CreateCat(`loki`, `blue`,`India`, 4);

console.log(loki);

loki.eat();
loki.summary();

//Class Method



class Animal{
    constructor(location, noOfLegs){
        this.anlocation = location;
        this.noOfLegs = noOfLegs;
    }
    eat(){
        console.log(`I live in ${this.anlocation} and I can eat`)
    }
    changeLocation(newLoc){
        return this.anlocation = newLoc;
    }
    summary(){
        return `I live in ${this.anlocation} and I have ${this.numberOfLegs}`
    }
}


let kangaroo2 = new Animal(`Australia`, 2)
console.log(kangaroo2);
kangaroo2.eat();

class Dog extends Animal{
    constructor(location, noOfLegs, name, color){
        super(location, noOfLegs)
        this.name = name;
        this.color = color;
    }
    bark(){
        console.log(`I am ${this.name} and I can bark 🐶`)
    }
    changeName(newName){
        return this.name = newName;
    }
    changeColor(){
        return this.color = newColor;
    }
    summary(){
        console.log( `I am  ${this.name} and I am of ${this.color} color. I can also bark`)
    }
}

let dodo = new Dog(`India`, 3, `dodo`, `white`)
console.log(dodo)
dodo.summary();


class Cat extends Animal{
    constructor(location, noOfLegs, name, colorofEyes){
        super(location, noOfLegs)
        this.name = name;
        this.colorofEyes = colorofEyes;
    }
    meow(){
        console.log(`I am ${this.name} and I can meow 🐶`)
    }
    changeName(newName){
        return this.name = newName;
    }
    changeColorOfEyes(newColor){
        return this.color = newColor;
    }
    summary(){
        console.log(`I am  ${this.name} and the color of my Eyes is ${this.colorOfEyes}. I can also do meow meow`
        );
    }
}

let loki2 = new Cat(`India`, 3, `loki`, `blue`)
console.log(loki)
loki2.meow();
loki2.summary();


