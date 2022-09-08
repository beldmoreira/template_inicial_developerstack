import { Request, Response } from "express";
import * as questionService from "../services/questionService.js";

export async function createQuestion(req: Request, res: Response) {
  const question = req.body;
  await questionService.insert(question);
  res.sendStatus(201);
}

export async function createAnswer(req: Request, res: Response) {
  // TODO
}

export async function get(req: Request, res: Response) {
  // TODO
}

export async function getById(req: Request, res: Response) {
  const id = req.params.id;
  const question = await questionService.findById(id);
  res.send(question);
}
