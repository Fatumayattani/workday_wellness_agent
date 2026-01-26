import { Opik } from "opik";

const opikClient = new Opik();

export async function logToOpik(input: any, output: any, promptVersion: string) {
  const trace = opikClient.trace({
    name: "Workday Wellness Agent Run",
    input,
    output,
    metadata: {
      promptVersion,
      model: "gemini-3-flash-preview"
    }
  });

  trace.end();
  await opikClient.flush();
}
