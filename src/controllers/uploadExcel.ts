import { Request, Response } from "express";
import path from "path";
import xlsx from "xlsx";

const uploadExcel = async (req: Request, res: Response) => {
  if (!req.file) {
    console.log("No Upload File");
    return res.status(400).json({ error: "No file uploaded" });
  }

  try {
    console.log("Start Upload File");
    console.log("File Name: ", req.file.filename);
    const filePath = path.join(__dirname, "../../", req.file.path);
    const workbook = xlsx.readFile(filePath);

    const firstSheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[firstSheetName];

    const data = xlsx.utils.sheet_to_json(worksheet);

    console.log("Done Upload");
    res.status(200).json({ data });
  } catch (error) {
    console.error("Error reading Excel file:", error);
    res.status(500).json({ error: "Error reading the uploaded file" });
  }
};

export default uploadExcel;
