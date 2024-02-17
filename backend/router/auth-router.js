const express = require("express");
const router = express.Router();
const controller = require("../controllers/auth-controller");
const {registerSchema,loginSchema} = require("../validators/auth-validator");
const validate = require("../middlewares/validator-middleware");

router.route("/").get(controller.home);
router.route("/register").post(validate(registerSchema),controller.register);
router.route("/login").get(validate(loginSchema),controller.login);

module.exports = router;