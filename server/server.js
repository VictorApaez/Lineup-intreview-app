const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/upload", upload.single("file"), (req, res) => {
  const file = req.file;
  // save the file to MongoDB using GridFS
  // ...
});
router.get("/files/:id", (req, res) => {
  const fileId = req.params.id;
  // retrieve the file from MongoDB using GridFS
  // ...
});
