class Book{
    constructor(title, category, author){
        this.title = title;
        this.category = category;
        this.author = author;
        this.isRead = false;
        this.finishedDate = null;
    }
    markBookAsRead(){
        this.isRead = true;
        this.finishedDate = Date.now();
    }
}



class BookList{
    constructor(){
        this.books = [];
        this.currentIndexOfBook = 0;
    }
    add(Books = []){
        return this.books = this.books.concat(Books)
    }
    getCurrentBook(){
        return this.books[this.currentIndexOfBook]
    }
    getNextBook(){
        return this.books[this.currentIndexOfBook+1]
    }
    getPreviousBook(){
        return this.books[this.currentIndexOfBook-1]
    }
    changeCurrentBook(index){
        this.currentIndexOfBook = index;
        return this.currentIndexOfBook
    }
}


let book1 = new Book("kafka on the shore", "Magical Realism", "Haurki Murakami")
let book2 = new Book("The Great Gatsby", "Novel", "F Scott Fitzgerald")
let book3 = new Book("To kill a mockingbird", "Novel", "Harper Lee")
let book4 = new Book("Anna Karenina", "Literary Realism", "Leo Tolstoy")
let book5 = new Book("The Sun also Rises", "Historical Fiction", "Ernest Hemimgway")

let lib = new BookList();

lib.add([book1, book2, book3, book4, book5])

console.log(lib)
