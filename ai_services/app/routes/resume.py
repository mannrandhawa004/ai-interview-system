from fastapi import APIRouter

router = APIRouter()

@router.post("/parse")
def parse_resume(data: dict):
    return {
        "skills": ["React", "Node.js", "MongoDB"],
        "experience": "2 years",
        "projects": ["URL shortener"]
    }