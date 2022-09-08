import { answer } from "@prisma/client";

export type CreateAnswerData = Omit<answer, 'id'>;

export type FindAnswerData = Omit<answer, 'id' | 'questionId'>;