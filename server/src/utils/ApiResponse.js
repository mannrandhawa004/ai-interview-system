class ApiResponse {
  constructor(res) {
    this.res = res
  }

  success(data = null, message = "Success", statusCode = 200) {
    return this.res.status(statusCode).json({
      success: true,
      message,
      data
    })
  }

  created(data = null, message = "Created") {
    return this.success(data, message, 201)
  }

  noContent(message = "No Content") {
    return this.res.status(204).json({
      success: true,
      message
    })
  }
}

export default ApiResponse