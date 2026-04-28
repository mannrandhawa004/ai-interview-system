import {
  generateQuestionsAI,
  evaluateAnswerAI
} from "../../services/ai.service.js"

export const generateQuestions = async (req, res) => {
  try {
    const { skills } = req.body

    const questions = await generateQuestionsAI(skills)

    res.json(questions)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

export const evaluateAnswer = async (req, res) => {
  try {
    const { question, answer } = req.body

    const result = await evaluateAnswerAI(question, answer)

    res.json(result)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}