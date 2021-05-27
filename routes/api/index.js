const router = require("express").Router();
const storyRoutes = require("./story");

router.use("/story", storyRoutes);

module.exports = router;