## Create Class

Convert the give image into class using inheritance.

- `name` is the property
- `eat()` is the method

Property ending with `()` is method. And others are properties.

![Inheritance](../assets/inheritance.png)

```js

class Person{
    constructor(name,age,gender){
        this.name = name;
        this.age = age;
        this.gender = gender
    }
    eat(food){
        console.log(`${this.name} eats ${food}`)
    }
    sleep(time){
        console.log(`${this.name} sleeps at ${time}`)
    }
    walk(time){
        console.log(`${this.name} goes for a walk at ${time}`)
    }
}

class Player extends Person {
    constructor(name, age, gender, sportsName){
        super(name, age, gender)
        this.sportsName = sportsName;
    }
    play(){
        console.log(`${this.name} plays ${this.sportsName}`)
    }
}

class Cricketer extends Player {
    constructor(name, age, gender, sportsName,teamName){
         super(name, age, gender, sportsName)
         this.team = teamName;
    }
    playCricket(){
        console.log(`${this.name} plays cricket for ${this.team}`)
    }
}

class Teacher extends Person {
    constructor(name, age, gender, institute){
        super(name, age, gender)
        this.institute = institute;
    }
    teach(){
        console.log(`${this.name} teaches at ${this.institute}`)
    }
}

class Artist extends Person {
    constructor(name, age, gender, kind){
        super(name, age, gender)
        this.kind = kind;
    }
    createArt(){
        console.log(`${this.name} practices ${this.kind}`)
    }
}




let Joel = new Player(`Joel`, 29,`Male`, `volleyball`)
let Akash = new Cricketer(`Akash`, 27, `Male`, `cricket`, `UP`)

Joel.play()
Joel.eat(`chicken`);
Joel.walk(`3PM`);

Akash.playCricket();

console.log(Joel)
console.log(Akash)


```