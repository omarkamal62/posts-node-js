const express = require("express");

const router = express.Router();

const feedController = require("../controllers/feedController");

router.get("/posts", feedController.getPosts);

router.post("/post", feedController.createPost);

module.exports = router;
