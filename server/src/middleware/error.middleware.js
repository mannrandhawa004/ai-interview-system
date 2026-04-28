import { AppError } from "../utils/AppError.js"

export const errorHandler = (err, req, res, next) => {

  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
      errors: err.errors || [],
      stack: process.env.NODE_ENV === "development" ? err.stack : undefined
    })
  }


  if (err.name === "ValidationError") {
    const errors = Object.values(err.errors).map(e => e.message)

    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors
    })
  }

  if (err.code === "LIMIT_FILE_SIZE") {
    return res.status(400).json({
      success: false,
      message: "File too large"
    })
  }


  console.error("Unexpected error:", err)

  return res.status(500).json({
    success: false,
    message: "Internal server error"
  })
}