const express = require('express')
const router = express.Router()
const { createChat,findChat,findUserChat } = require("../controllers/chatControllers")


router.route("/create").post(createChat);
router.route("/:userId").get(findUserChat);
router.route("/find/:firstId/:secondId").get(findChat)


module.exports = router;