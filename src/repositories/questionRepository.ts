import { prisma } from "../config/database.js";
import { QuestionData } from "../types/questionTypes.js";

export async function insert(question: QuestionData) {
  await prisma.question.create({ data: question });
}

export async function findAll() {
  const questions = await prisma.question.findMany();
  return questions;
}

export async function findById(id: number) {
  await prisma.question.findUnique({ where: { id } });
}
