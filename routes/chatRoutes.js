const express = require('express')
const router = express.Router()
const { createChat,findChat,findUserChat } = require("../controllers/chatControllers")


router.route("/create").post(createChat);
router.route("/:userId").post(findUserChat);
router.route("/find/:firstId/:secondId").post(findChat)


module.exports = router;