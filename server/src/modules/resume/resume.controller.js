import { parseResumeAI } from "../../services/ai.service.js"

export const uploadResume = async (req, res) => {
  try {
    return res.json({
      message: "Resume uploaded",
      filePath: req.file.path
    })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

export const parseResume = async (req, res) => {
  try {
    const { filePath } = req.body

    const data = await parseResumeAI(filePath)

    res.json(data)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}