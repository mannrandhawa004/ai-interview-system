import express from "express"
import { uploadResume, parseResume } from "./resume.controller.js"
import upload from "../../middleware/upload.js"

const router = express.Router()

router.post("/upload", upload.single("resume"), uploadResume)
router.post("/parse", parseResume)

export default router