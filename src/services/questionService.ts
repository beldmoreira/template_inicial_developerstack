import { prisma } from "../config/database.js";
import * as questionRepository from "../repositories/questionRepository.js";
import { QuestionData } from "../types/questionTypes.js";

export async function insert(question: QuestionData) {
  await questionRepository.insert(question);
}

export async function findAll() {
  const questions = await questionRepository.findAll();
  return questions;
}

export async function findById(questionId: number) {
  await questionRepository.findById(questionId);
}
