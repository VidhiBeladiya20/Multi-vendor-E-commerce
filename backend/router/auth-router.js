const express = require("express");
const router = express.Router();
const controller = require("../controllers/auth-controller");
const {registerSchema,loginSchema} = require("../validators/auth-validator");
const validate = require("../middlewares/validator-middleware");
const upload_image_middleware = require("../middlewares/upload-image-middleware");

router.route("/").get(controller.home);
router.route("/register").post(validate(registerSchema),upload_image_middleware,controller.register);
router.route("/login").post(validate(loginSchema),controller.login);

module.exports = router;