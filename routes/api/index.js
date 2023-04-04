const router = require("express").Router();
const thoughtRoutes = require("./courseRoutes");
const userRoutes = require("./studentRoutes");

router.use("/thought", courseRoutes);
router.use("/user", studentRoutes);

module.exports = router;
