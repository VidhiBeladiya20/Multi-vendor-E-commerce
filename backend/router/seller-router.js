const express = require("express");
const router = express.Router();
const controller = require("../controllers/seller-controller");

router.route("/home").get(controller.home);
router.route("/register").post(controller.register);

module.exports = router;