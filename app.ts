import cors from "cors";
import express, { json } from "express";
import "express-async-errors";
import questionsRouter from "./routes/questionsRouter.js";

const app = express();
app.use(json());
app.use(cors());
app.use(questionsRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
