import { prisma } from "../config/database";
import { CreateQuestionData } from "../types/questionTypes";

export async function insert(question: CreateQuestionData) {
    await prisma.question.create({ data: question });
}

export async function getAll() {
    return await prisma.question.findMany();
}

export const getById = async (id: number) => {
    return await prisma.question.findUnique({
        where: {
            id,
        },
        select: {
            id: true,
            askedBy: true,
            question: true,
            answers: {
                select: {
                    answeredBy: true,
                    answer: true,
                },
            },
        },
    });
};