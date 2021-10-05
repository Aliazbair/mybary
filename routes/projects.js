const {
  ALLProjects,
  renderForm,
  AddProject,
} = require("../controllers/ProjectController");
const router = require("express").Router();
const Projects = require("../models/projects");

router.get("/new", renderForm);
// get and post route
router.route("/").get(renderForm).post(AddProject);

// put and delete router
// router.route('/:id').get().put().delete();

module.exports = router;
