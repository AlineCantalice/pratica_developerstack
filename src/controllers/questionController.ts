import { Request, Response } from 'express';
import { CreateQuestionData } from '../types/questionTypes';
import * as questionService from '../services/questionService';
import * as answerService from '../services/answerService';
import { CreateAnswerData } from '../types/answerTypes';
import { question } from '@prisma/client';

export async function createQuestion(req: Request, res: Response) {
  const question: CreateQuestionData = req.body;

  questionService.createQuestion(question);

  res.status(201).send('Question created!!');
}

export async function createAnswer(req: Request, res: Response) {
  const { id } = req.params;
  const answer: CreateAnswerData = { ...req.body, questionId: Number(id) };

  answerService.createAnswer(answer);

  res.status(201).send('Answer created!!');
}

export async function get(req: Request, res: Response) {

  const questions: { questions: question[] } = await questionService.getAllQuestions();

  res.status(200).send(questions);
}

export async function getById(req: Request, res: Response) {
  const { id } = req.params;

  const result = await questionService.getQuestionById(Number(id));

  res.status(200).send(result);
}
