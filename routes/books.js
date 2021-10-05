const express = require("express");
const router = express.Router();
const {
  AllBooks,
  FormBooks,
  AddBooks,
} = require("../controllers/booksController");
const Author = require("../models/author");
const Books = require("../models/books");


router.get("/", async (req, res) => {
  res.render("books/index");
});

router.get("/new", async (req, res) => {
  try{
    const authors = await Author.find({})
    const book= new Books()
    res.render("books/new",{ authors: authors,book: book})
  }
  catch{
    res.redirect('/books')
  }
  // res.render('books/new')
  // try {
  //   const authors = await Author.find({});
  //   const book = new Book();
  //   res.render("books/new", { authors: authors, book: book });
  // } catch {
  //   res.redirect("/books");
  // }
});

// get all authors && create a new author
// router.route("/").get(AllBooks).post(AddBooks);

// show form
// router.get("/new", FormBooks);

module.exports = router;
