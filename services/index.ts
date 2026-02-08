import express from "express";
import cors from "cors";
import "dotenv/config";
import { logToOpik } from "./opik/opikLogger";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/opik/log", async (req, res) => {
  await logToOpik(req.body.input, req.body.output, req.body.promptVersion);
  res.json({ ok: true });
});

app.listen(3001, () => {
  console.log("Services running on http://localhost:3001");
});