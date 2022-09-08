import { prisma } from "../config/database";
import { CreateAnswerData } from "../types/answerTypes";

export async function insert(answer: CreateAnswerData) {
    await prisma.answers.create({ data: answer });
}

export async function getAnswersByQuestionId(questionId: number) {
    return prisma.answers.findMany({ where: { questionId } });
}