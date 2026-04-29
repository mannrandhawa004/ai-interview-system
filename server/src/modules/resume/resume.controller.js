import asyncHandler from "../../utils/asyncHandler.js"
import ApiResponse from "../../utils/ApiResponse.js"
import { BadRequestError } from "../../utils/AppError.js"
import { parseResumeAI } from "../../services/ai.service.js"

export const uploadAndParseResume = asyncHandler(async (req, res) => {
  if (!req.file) {
    throw new BadRequestError("Resume file is required")
  }

  const filePath = req.file.path

  const parsedData = await parseResumeAI(filePath)

  const response = new ApiResponse(res)

  return response.success(parsedData, "Resume parsed successfully")
})