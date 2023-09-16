const express = require('express');
const { getAlltech, deleteEvent, updateEvent, addEvent, geteventById } = require('./controllers/techcontrollers');
const { getAllUsers, signup, login } = require('./controllers/usercontroller');
const router = express.Router();

router.get("/api/events",getAlltech);
router.post("/api/events",addEvent);
router.put("/api/events/:id",updateEvent);
router.delete("/api/events/:id",deleteEvent);
router.get("/api/events/:id",geteventById);

router.get("/api/users", getAllUsers);
router.post("/api/users/signup",signup);
router.post("/api/users/login",login);

module.exports = router;