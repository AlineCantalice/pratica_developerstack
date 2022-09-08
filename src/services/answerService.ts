import { CreateAnswerData, FindAnswerData } from "../types/answerTypes";
import * as repository from "../repositories/answerRepository";

export async function createAnswer(answer: CreateAnswerData) {
    await repository.insert(answer);
}
