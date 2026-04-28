import express from "express"
import {
  generateQuestions,
  evaluateAnswer
} from "./interview.controller.js"

const router = express.Router()

router.post("/questions", generateQuestions)
router.post("/evaluate", evaluateAnswer)

export default router