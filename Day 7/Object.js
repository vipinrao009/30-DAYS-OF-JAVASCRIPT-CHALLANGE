// Task 1

const book = {
    title:"Book 1",
    author:"Vipin Rao",
    year:"2024"
}

console.log(book);

// Task 2

console.log(book.author);
console.log(book.title)
console.log(book.year)

// Task 3

class books{
    constructor(title,author){
        this.title = title,
        this.author = author
    }

    getTitleAndAuthor(){
        return `${this.title} by ${this.author}`;
    }
}

let myBook = new books("To kill amockingbird","Harper Lee")

console.log(myBook.getTitleAndAuthor())

// Task 4
const book1 = {
    title: "The Lord of the Rings",
    author: "J. R. R. Tolkien",
    year: 1954,
    updateYear: function(year) {
      this.year = year;
      console.log(this);
    }
  };
  
  book1.updateYear(2004); 

// Task 5

const library = {
    name: "City Library",
    books: [
        {
            title: "History of Time",
            author: {
                firstName: "Stephen",
                lastName: "Hawking"
            },
            genre: "Science"
        },
        {
            title: "To Kill a Mockingbird",
            author: {
                firstName: "Harper",
                lastName: "Lee"
            },
            genre: "Fiction"
        },
        
    ]
};

console.log(library)

// Task 6
console.log(library.name)

library.books.forEach(book => {
    console.log(book.title);
});

// Alternative way to print all the title of the book
for (let i = 0; i < library.books.length; i++) {
    console.log(library.books[i].title);
}


// Task 7

const library1 = {
    name: "City Library",
    books: [
        {
            title: "History of Time",
            genre: "Science",
            year: 1988,
            getBookInfo: function() {
                return `${this.title} (${this.year})`;
            }
        },
        {
            title: "To Kill a Mockingbird",
            genre: "Fiction",
            year: 1960,
            getBookInfo: function() {
                return `${this.title} (${this.year})`;
            }
        },
        {
            title: "The Great Gatsby",
            genre: "Classic",
            year: 1925,
            getBookInfo: function() {
                return `${this.title} (${this.year})`;
            }
        }
    ]
};


library1.books.forEach(book => {
    console.log(book.getBookInfo());
});

console.log("---------------------------------------------------------")

// Task 8

const book2 = {
    title: "History of Time",
    author: {
        firstName: "Stephen",
        lastName: "Hawking"
    },
    genre: "Science",
    year: 1988,
    getBookInfo: function() {
        return `${this.title} (${this.year})`;
    }
};

// Use a for...in loop to iterate over the properties of the book object
for (let property in book2) {
    if (book.hasOwnProperty(property)) {
        // console.log(property)
        // console.log(book2[property])
        console.log(`${property}:${book2[property]}`);
    }
}

// Task 9
console.log(Object.keys(book2))
console.log(Object.values(book2))
