import prisma from "@prisma/client";
import { AnswerData } from "../types/answerTypes";

export async function insert(answer: AnswerData) {
  await prisma.answer.create({ data: answer });
}

export async function findById(questionId: number) {
  return prisma.answer.findUnique({ where: { id: questionId } });
}
