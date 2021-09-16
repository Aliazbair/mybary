const { render } = require("ejs");
const { query } = require("express");
const express = require("express");
const router = express.Router();
const Author = require("../models/author");

// all authors route
// router.get("/", (req, res) => {
//   res.render('author/index')
// });
router
  .route("/")
  .get(async (req, res) => {
      let searchOption={}
    //   make search
    if(req.query.name != null && req.query.name !== ''){
        searchOption.name=new RegExp(req.query.name,'i')
    }
    try {
      const authors = await Author.find(searchOption);
      res.render("author/index", { authors,searchOption:req.query });
    } catch {
      res.redirect("/");
    }
  })
  .post(async (req, res) => {
    const { name } = req.body;
    const author = new Author({ name });
    try {
      const newAuthor = await author.save();
      res.redirect(`author`);
    } catch {
      res.render("author/new", {
        author: author,
        errorMessage: "Error creating Author",
      });
    }
    // author.save((err, newAuthor) => {
    //   if (err) {
    //     res.render("/new", {
    //       author: author,
    //       errorMessage: "Error creating Author",
    //     });
    //   } else {
    //     res.redirect(`author`);
    //   }
    // });
  });

// show form
router.get("/new", (req, res) =>
  res.render("author/new", { author: new Author() })
);

// new author route

module.exports = { router };
