const express = require('express')
const router = express.Router()
const { createMessage,getMessage } = require("../controllers/messageControllers")


router.route("/create").post(createMessage);
router.route("/:chatId").post(getMessage);


module.exports = router;