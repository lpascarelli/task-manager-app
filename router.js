const express = require("express")

const router = express.Router()

const userController = require("./src/controllers/userController")
const taskController = require("./src/controllers/taskController")
const auth = require("./src/middleware/auth")

// User routes
router.get("/users/me", auth, userController.profile)
// router.get("/users/:id", userController.get)
router.post("/users", userController.create)
router.post("/users/login", userController.login)
router.post("/users/logout", auth, userController.logout)
router.post("/users/logoutAll", auth, userController.logoutAll)
router.patch("/users/me", auth, userController.update)
router.delete("/users/me", auth, userController.delete)

// Task routes
router.get("/tasks", auth, taskController.all)
router.get("/tasks/:id", auth, taskController.get)
router.post("/tasks", auth, taskController.create)
router.patch("/tasks/:id", auth, taskController.update)
router.delete("/tasks/:id", auth, taskController.delete)

module.exports = router
