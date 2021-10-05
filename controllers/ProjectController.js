const mongoose = require("mongoose");
const projects = require("../models/projects");
const Projects = require("../models/projects");

// render project from
const renderForm = (req, res) => {
  try {
    const project = new Projects();
    res.render("projects/new", { project: project });
  } catch {
    res.redirect("/projects");
  }
};
// @route GET ALL Projects
//@ DESC GET ALL Projects
//@ ACCESS public
const ALLProjects = async (req, res, next) => {
  try {
    const projects = await Projects.find({});
    res.status(200).json(projects);
    console.log(2222);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "server errors" });
  }
};
// @route GET /posts/2535353
//@ DESC GET single POST
//@ ACCESS public
const SingleP = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findById(id);
    res.status(200).json(post);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "server errors" });
  }
};

// @route POST  /posts
//@ DESC create new POSTS
//@ ACCESS public
const AddProject = async (req, res) => {
  try {
    const { title, description, tools, start, end } = req.body;
    const projects = await Projects.create({
      title,
      description,
      tools,
      start,
      end,
    });
    res.redirect(`/projects`);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "server errors" });
  }
};

// @route delete  /posts
//@ DESC delete POST
//@ ACCESS public
const DeletePosts = async (req, res) => {
  const { id } = req.params;
  try {
    const DelPost = await Post.findOneAndRemove(id);
    res.status(200).json(DelPost);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "server errors" });
  }
};

module.exports = { ALLProjects, renderForm, AddProject };
