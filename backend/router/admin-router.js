const express = require("express");
const router = express.Router();
const controller = require("../controllers/admin-controller");
const multer = require('multer');
const upload = multer({dest: 'sellerLogo'});

router.route("/request").post(upload.single('image'),controller.request);

module.exports = router;
