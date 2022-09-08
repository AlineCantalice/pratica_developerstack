import { questions } from "@prisma/client";

export type CreateQuestionData = Omit<questions, 'id'>;