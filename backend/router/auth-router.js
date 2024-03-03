const express = require("express");
const router = express.Router();
const controller = require("../controllers/auth-controller");
const {registerSchema,loginSchema} = require("../validators/auth-validator");
const validate = require("../middlewares/validator-middleware");
const multer = require('multer');
const upload = multer({dest: 'uploads'});
const authMiddleware = require("../middlewares/auth-middleware")


router.route("/").get(controller.home);

router.route("/register").post(upload.single('image'),validate(registerSchema),controller.register);

router.route("/login").post(validate(loginSchema),controller.login);

router.route("/user").get(authMiddleware, controller.user);

router.route("/otp").post(controller.otp);

router.route("/forgot-password").post(controller.forgotPassword);

router.route("/reset-password/:id/:token").post(controller.resetPassword);

module.exports = router;
