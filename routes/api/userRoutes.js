const router = require("express").Router();
const {
  getUsers,
  getUser,
  createUser,
  deleteUser,
  
} = require("../../controllers/userController");

// /api/user
router.route("/").get(getUser).post(createUser);

// /api/user/:userId
router.route("/:userId").get(getUser).delete(deleteUser);


module.exports = router;
