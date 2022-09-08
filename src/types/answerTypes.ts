import { answers } from "@prisma/client";

export type CreateAnswerData = Omit<answers, 'id'>;

export type FindAnswerData = Omit<answers, 'id' | 'questionId'>;