const router = require("express").Router();
const workoutsRoutes = require("./workouts");

// Workouts routes
router.use("/workouts", workoutsRoutes);

module.exports = router;
