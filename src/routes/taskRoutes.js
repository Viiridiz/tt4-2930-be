const express = require("express");
const {
  createTask,
  getTasks,
  deleteTask
} = require("../controllers/taskController");
const { authMiddleware } = require("../middlewares/authMiddleware");

const router = express.Router();

router.use(authMiddleware);

router.post("/", createTask);
router.get("/", getTasks);
router.delete("/:id", deleteTask)

module.exports = router;
