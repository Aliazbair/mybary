const { render } = require("ejs");
const express = require("express");
const router = express.Router();
const { allAuthor, CreateAuthor } = require("../controllers/author");
const Author = require("../models/author");

// get all authors && create a new author
router.route("/").get(allAuthor).post(CreateAuthor);

// show form
router.get("/new", (req, res) =>
  res.render("author/new", { author: new Author() })
);

module.exports = { router };
