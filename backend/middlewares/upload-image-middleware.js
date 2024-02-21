const multer = require('multer');

// Set up Multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../uploads/') // Destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname) // Filename will be originalname + timestamp
  }
});
const upload = multer({ storage: storage });

module.exports = upload.single('image');