

class Square {
    constructor(side){
        this.width = side;
        this.height = side;
    }

    description(){
        alert(`The square is ${this.width} x ${this.height}`)
    }

    calcArea(){
        return this.width * this.height;
    }

    get area(){
        return this.width * this.height;
    }

    set area (value) {
        this.width = Math.sqrt(value);
        this.height = Math.sqrt(value);
    }

    static isEqual(a, b){
        return (a.width * a.height) === (b.width * b.height)

    }

    static isEqual(a, b){
        return (a.width * a.height) === (b.width * b.height)
    }
}

class User {
    constructor(fname, lname){
        this.firstname = fname;
        this.lastname = lname;
    }

    get fullName(){
        return this.firstname + this.lastname
    }

    set fullName(fullname){
        if(fullname.length <= 5) {
            alert(`full name can't be less than 5 charac`)
        } else {
        let fullNameArr = fullname.split(" ")
        this.firstname = fullNameArr[0];
        this.lastname = fullNameArr[1];
        }
    }

    nameContains(str){
        return `${this.firstname} ${this.lastname}`.includes(str)
    }
}

let user1 = new User(`Joel`, `Joseph`)
let user2 = new User(`Rahul`, `Mandyal`)

user1.fullName;
console.log(user1.nameContains(`oe`)) 

