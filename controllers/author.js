const mongoose = require("mongoose");
const Author = require("../models/author");

// @desc  Get all Author
// @route GET /author
// @access Public
const allAuthor = async (req, res) => {
  let searchOption = {};
  //   make search
  if (req.query.name != null && req.query.name !== "") {
    searchOption.name = new RegExp(req.query.name, "i");
  }
  try {
    const authors = await Author.find(searchOption);
    res.render("author/index", { authors, searchOption: req.query });
  } catch {
    res.redirect("/");
  }
};

// @desc  Create New Author
// @route POST /author/new
// @access Public
const CreateAuthor = async (req, res) => {
  // get name
  const { name } = req.body;
  const author = new Author({ name });
  try {
    const newAuthor = await author.save();
    res.redirect(`author`);
  } catch {
    res.redirect("/");
  }
};

module.exports = { allAuthor, CreateAuthor };
