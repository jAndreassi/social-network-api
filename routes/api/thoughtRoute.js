const router = require("express").Router();
const {
  getThought,
  // getSingleCourse,
  createThought,
  updateThought,
  deleteThought,
} = require("../../controllers/thoughtController.js");

// /api/thought
router.route("/").get(getThought).post(createThought);

// /api/thought/:thoughtId
router
  .route("/:thoughtId")
  .get(getThought)
  .put(updateThought)
  .delete(deleteThought);

module.exports = router;
