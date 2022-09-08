import { CreateQuestionData } from "../types/questionTypes";
import * as repository from "../repositories/questionRepository";
import { findAnswersByQuestionId } from "./answerService";

export async function createQuestion(question: CreateQuestionData) {
    await repository.insert(question);
}

export async function getAllQuestions() {
    const questions = await repository.getAll();

    return {
        questions: questions
    }
}

export async function getQuestionById(id: number) {
    const question = await repository.getById(id);
    const answers = await findAnswersByQuestionId(id);

    return { question: question, answers: answers };
}
