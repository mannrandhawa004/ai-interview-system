import axios from "axios"

const AI_BASE = "http://localhost:8000"

export const parseResumeAI = async (filePath) => {
  const res = await axios.post(`${AI_BASE}/resume/parse`, {
    filePath
  })
  return res.data
}

export const generateQuestionsAI = async (skills) => {
  const res = await axios.post(`${AI_BASE}/interview/questions`, {
    skills
  })
  return res.data
}

export const evaluateAnswerAI = async (question, answer) => {
  const res = await axios.post(`${AI_BASE}/interview/evaluate`, {
    question,
    answer
  })
  return res.data
}