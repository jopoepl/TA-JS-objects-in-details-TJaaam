class BookList{
    constructor(title, category, author){
        this.title = title;
        this.category = category;
        this.author = author;
        this.isRead = false;
        this.finishedDate = 0;
    }
    markBookAsRead(){
        this.isRead = true;
        this.finishedDate = Date.now();
    }

}



class Book{}