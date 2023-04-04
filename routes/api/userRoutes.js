const router = require("express").Router();
const {
  getUsers,
  getUser,
  createUser,
  deleteUser,
  // addAssignment,
  // removeAssignment,
} = require("../../controllers/userController");

// /api/user
router.route("/").get(getUser).post(createUser);

// /api/user/:userId
router.route("/:userId").get(getUser).delete(deleteUser);

// /api/students/:studentId/assignments
// router.route("/:studentId/assignments").post(addAssignment);

// /api/students/:studentId/assignments/:assignmentId
// router.route("/:studentId/assignments/:assignmentId").delete(removeAssignment);

module.exports = router;
