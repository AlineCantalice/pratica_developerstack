import { prisma } from "../config/database";
import { CreateAnswerData } from "../types/answerTypes";

export async function insert(answer: CreateAnswerData) {
    await prisma.answer.create({ data: answer });
}