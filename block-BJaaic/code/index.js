let animalMethods = {
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

function createAnimal (location, noOfLegs){
    let animal = Object.create(animalMethods);
    animal.anlocation = location;
    animal.noOfLegs = noOfLegs;
    console.log(this)

    return animal;
}

let kangaroo = createAnimal(`Australia`, 2)
console.log(kangaroo);
kangaroo.eat();


//DOG
let dogMethods = {
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

function createDog (name, color, anlocation, noOfLegs){
    let dog = createAnimal(anlocation, noOfLegs);
    Object.setPrototypeOf(dog, dogMethods)
    dog.name = name;
    dog.color = color;
    return dog;
}

Object.setPrototypeOf(dogMethods, animalMethods);

let pochi = createDog(`pochi`, `brown`,`India`, 4);

console.log(pochi);

pochi.eat();

//cat

//DOG
let catMethods = {
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

function createCat (name, colorofEyes, anlocation, noOfLegs){
    let cat = createAnimal(anlocation, noOfLegs);
    Object.setPrototypeOf(cat, catMethods)
    cat.name = name;
    cat.colorOfEyes = colorofEyes;
    return cat;
}

Object.setPrototypeOf(catMethods, animalMethods);

let loki = createCat(`loki`, `blue`,`India`, 4);

console.log(loki);

loki.eat();
loki.summary();