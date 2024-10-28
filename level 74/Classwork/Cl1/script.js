class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

   
    displayDetails() {
        console.log("Title:", this.title);
        console.log("Author:", this.author);
        console.log("Year:", this.year);
    }
}


const book1 = new Book("lalala", "arvici", 1960);
const book2 = new Book("oioioi", "baka", 1949);

book1.displayDetails();
book2.displayDetails();


