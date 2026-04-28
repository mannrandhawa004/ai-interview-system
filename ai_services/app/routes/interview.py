from fastapi import APIRouter

router = APIRouter()

@router.post("/questions")
def generate_questions(data: dict):
    skills = data.get("skills", [])

    questions = []

    for skill in skills:
        questions.append(f"What is {skill}?")
        questions.append(f"Explain advanced concepts of {skill}")

    return {
        "questions": questions
    }


@router.post("/evaluate")
def evaluate_answer(data: dict):
    question = data.get("question")
    answer = data.get("answer")

    score = min(len(answer) // 20, 10)

    return {
        "score": score,
        "feedback": "Good attempt, improve depth."
    }