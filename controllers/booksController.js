const mongoose = require("mongoose");
const Author = require("../models/author");
const Books = require("../models/books");

// @desc  Get all Books
// @route GET /books
// @access Public
const AllBooks = async (req, res) => {
//   try {
//     const authors = await Author.find({});
//     const book = new Book();
//     res.render("books/new", { authors: authors, book: book });
//   } catch {
//     res.redirect("/books");
//   }
    res.render('books/index');
};

// @desc  Get show book form
// @route GET /book
// @access Public
const FormBooks = async (req, res) => {
  try {
    const authors = await Author.find({});
    const book = new Book();
    res.render("books/new", { authors: authors, book: book });
  } catch {
    res.redirect("/books");
  }
};

// @desc  Add new book
// @route POST   /book/New
// @access Public
const AddBooks = async (req, res) => {
  res.send("add book");
};

module.exports = { AllBooks, FormBooks, AddBooks };
