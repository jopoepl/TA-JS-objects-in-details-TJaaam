

class Square {
    constructor(side){
        this.width = side;
        this.height = side;
    }

    description(){
        alert(`The square is ${width} x ${height}`)
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

    static isEqual(square){
        

    }
}