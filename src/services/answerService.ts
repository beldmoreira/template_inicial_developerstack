import * as answerRepository from "../repositories/answerRepository.js";
import { AnswerData } from "../types/answerTypes.js";

async function insert(answer: AnswerData) {
  await answerRepository.insert(answer);
}
