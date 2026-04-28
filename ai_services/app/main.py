from fastapi import FastAPI
from app.routes import resume, interview

app = FastAPI()

app.include_router(resume.router, prefix="/resume")
app.include_router(interview.router, prefix="/interview")