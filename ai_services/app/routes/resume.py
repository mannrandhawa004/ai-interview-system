from fastapi import APIRouter
import pdfplumber

router = APIRouter()

@router.post("/parse")
def parse_resume(data: dict):
    file_path = data.get("filePath")

    text = ""

    try:
        with pdfplumber.open(file_path) as pdf:
            for page in pdf.pages:
                text += page.extract_text() or ""
    except Exception as e:
        return {
            "error": f"Failed to read PDF: {str(e)}"
        }

    # Simple extraction logic (we'll improve later)
    skills = []

    skill_keywords = [
        "python", "java", "react", "node", "mongodb",
        "express", "sql", "machine learning"
    ]

    text_lower = text.lower()

    for skill in skill_keywords:
        if skill in text_lower:
            skills.append(skill)

    return {
        "skills": skills,
        "raw_text_length": len(text)
    }