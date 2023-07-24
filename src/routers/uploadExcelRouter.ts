import express from "express";
import multer from "multer";
import path from "path";
import uploadExcel from "../controllers/uploadExcel";

const router = express.Router();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {

    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  },
});

const upload = multer({ storage });

router.post("/upload-excel", upload.single("excelFile"), uploadExcel);

export default router;
