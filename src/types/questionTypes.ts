import { question } from "@prisma/client";

export type CreateQuestionData = Omit<question, 'id'>;