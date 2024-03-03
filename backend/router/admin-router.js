const express = require("express");
const router = express.Router();
const controller = require("../controllers/admin-controller");
const multer = require('multer');
const upload = multer({dest: 'sellerLogo'});

router.route("/request").post(upload.single('image'),controller.request);

router.route("/otp").post(controller.otp);

router.route("/getRequest").get(controller.getRequest);

module.exports = router;
