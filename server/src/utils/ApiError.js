export class AppError extends Error {
  constructor(message, statusCode = 500, isOperational = true, errors = []) {
    super(message)

    this.statusCode = statusCode
    this.success = false
    this.isOperational = isOperational
    this.errors = errors

    Error.captureStackTrace(this, this.constructor)
  }
}

export class BadRequestError extends AppError {
  constructor(message = "Bad Request", errors = []) {
    super(message, 400, true, errors)
  }
}

export class UnauthorizedError extends AppError {
  constructor(message = "Unauthorized") {
    super(message, 401)
  }
}

export class ForbiddenError extends AppError {
  constructor(message = "Forbidden") {
    super(message, 403)
  }
}

export class NotFoundError extends AppError {
  constructor(message = "Resource not found") {
    super(message, 404)
  }
}

export class ConflictError extends AppError {
  constructor(message = "Conflict occurred") {
    super(message, 409)
  }
}

export class RateLimitError extends AppError {
  constructor(message = "Too many requests, try again later") {
    super(message, 429)
  }
}

export class ValidationError extends AppError {
  constructor(errors = [], message = "Validation failed") {
    super(message, 422, true, errors)
  }
}

export class ServerError extends AppError {
  constructor(message = "Internal server error") {
    super(message, 500, false)
  }
}