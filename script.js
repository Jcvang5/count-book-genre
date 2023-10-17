const books = {
    book1: { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Fiction" },
    book2: { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction" },
    book3: { title: "1984", author: "George Orwell", genre: "Science Fiction" },
    book4: { title: "Pride and Prejudice", author: "Jane Austen", genre: "Fiction" },
    book5: { title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy" }
};

$(document).ready(function() {
    $("#countBooksButton").click(function(){
        const selectedGenre = $("#genreSelector").val();
        const resultElement = $("#result");
    
        let count = 0;
        for (let book in books) {
            if (books[book].genre === selectedGenre) {
                count++;
            }
        }    
        resultElement.text(`Number of ${selectedGenre} books: ${count}`);
    });
});
