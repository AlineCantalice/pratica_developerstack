import { prisma } from "../config/database";
import { CreateQuestionData } from "../types/questionTypes";

export async function insert(question: CreateQuestionData) {
    await prisma.questions.create({ data: question });
}

export async function getAll() {
    return await prisma.questions.findMany();
}

export const getById = async (id: number) => {
    return await prisma.questions.findUnique({
        where: {
            id,
        },
        select: {
            id: true,
            question: true,
            answers: {
                select: {
                    answer: true,
                },
            },
        },
    });
};