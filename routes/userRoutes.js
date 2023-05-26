const express = require('express')
const router = express.Router()
const {register,login,findUser} = require("../controllers/userController")


router.route("/register").post(register);
router.route("/login").post(login);
router.route("/finduser/:_id").get(findUser)

module.exports = router;