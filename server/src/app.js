import express from "express"
import cors from "cors"
import dotenv from "dotenv"

import { errorHandler } from "./middleware/error.middleware.js"
import { notFound } from "./middleware/notFound.middleware.js"

import resumeRoutes from "./modules/resume/resume.routes.js"
import interviewRoutes from "./modules/interview/interview.routes.js"
dotenv.config()


const app = express()

app.use(cors())
app.use(express.json())


app.use("/api/resume", resumeRoutes)
app.use("/api/interview", interviewRoutes)



app.use(notFound)
app.use(errorHandler)

export default app