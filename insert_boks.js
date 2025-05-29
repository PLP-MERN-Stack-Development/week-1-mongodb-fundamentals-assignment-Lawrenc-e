use plp_bookstore;

db.books.insertMany([
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    genre: "Programming",
    published_year: 1999,
    price: 45.99,
    in_stock: true,
    pages: 352,
    publisher: "Addison-Wesley"
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    genre: "Programming",
    published_year: 2008,
    price: 39.99,
    in_stock: true,
    pages: 464,
    publisher: "Prentice Hall"
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    published_year: 1960,
    price: 19.99,
    in_stock: true,
    pages: 281,
    publisher: "J.B. Lippincott & Co."
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    published_year: 1949,
    price: 14.99,
    in_stock: false,
    pages: 328,
    publisher: "Secker & Warburg"
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
    published_year: 1925,
    price: 10.99,
    in_stock: true,
    pages: 180,
    publisher: "Charles Scribner's Sons"
  },
  {
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    genre: "Programming",
    published_year: 2008,
    price: 25.99,
    in_stock: true,
    pages: 176,
    publisher: "O'Reilly Media"
  },
  {
    title: "Becoming",
    author: "Michelle Obama",
    genre: "Biography",
    published_year: 2018,
    price: 24.99,
    in_stock: false,
    pages: 448,
    publisher: "Crown Publishing Group"
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-help",
    published_year: 2018,
    price: 21.99,
    in_stock: true,
    pages: 320,
    publisher: "Penguin Random House"
  },
  {
    title: "A Promised Land",
    author: "Barack Obama",
    genre: "Biography",
    published_year: 2020,
    price: 29.99,
    in_stock: true,
    pages: 768,
    publisher: "Crown"
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fiction",
    published_year: 1988,
    price: 16.99,
    in_stock: false,
    pages: 208,
    publisher: "HarperTorch"
  }
]);
