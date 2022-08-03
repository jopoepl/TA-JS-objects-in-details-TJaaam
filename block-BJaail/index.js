/*
# Creating a book store app using OOP

You should have the following features in the bookly app:

- User can add a new book by adding the name, author and url of the image
- Once added the book will be marked not read
- You can change the state of the book to `Read` and it will be marked as completed
- User can delete the book

![DEMO](../assets/bookly.png)
*/

let body = document.querySelector(`body`);
let tb = document.querySelector(`table`);
let tbody = document.querySelector(`.table-body`);
let addBook = document.querySelector(`.add-book`);
let inputTitle = document.querySelector(`#title`);
let inputAuthor = document.querySelector(`#author`);
let inputISBN = document.querySelector(`#isbn`);


class BookList{
    constructor(root, list = []){
        this.books = list;
        this.root = root;
    }
    add(title, author, genre){
        let book1 = new Book(title, author, genre);
        this.books.push(book1);
        this.createUI();
        return this.books.length;
    }

    delete(event){
        let index = this.books.findIndex((ele) => {
            event.target.previousElementSibling.innerText === this.books.id
        });
        this.books.splice(index, 1);
        this.createUI();
    }
    changeState(title){
        let index = this.books.findIndex(title);
        this.books[index].isRead = !this.books[index].isRead
        alert(`${title} is marked as Read!`)
    }
    createUI() {
        tbody.innerHTML = "";
        this.books.forEach((book)=> {
            book.createUI()
        });
    }
}

class Book{
    constructor(title, author, genre){
        this.name = title;
        this.author = author;
        this.genre = genre;
        this.isRead = false;
        this.id = Date.now();
    }

    createUI() {
        let row = document.createElement(`tr`)
        let title = document.createElement(`td`)
        title.innerText = this.name;
        let author = document.createElement(`td`)
        author.innerText = this.author
        let isbn = document.createElement(`td`)
        isbn.innerText = this.id
        let del = document.createElement(`td`)
        del.innerText = "X"
        del.classList.add(`del`)
        row.append(title,author,isbn,del)
        tbody.append(row)
        tb.append(tbody);
    }
}

addBook.addEventListener("click", function(){
    let title = inputTitle.value;
     let isbn = inputISBN.value;
     let author = inputAuthor.value;
     myBookList.add(title, author, isbn)
})

document.addEventListener("click", function(event){
    if(event.target.classList.contains("del")){
        myBookList.delete(event);
    }
})


let myBookList = new BookList(document.querySelector(".books"));
myBookList.add("To Kill A MockingBird", "Harper Lee")
myBookList.add("To Kill A Pigeon", "Boring Lee")

document.addEventListener("click", function(event){
    console.dir(event.target)
})




