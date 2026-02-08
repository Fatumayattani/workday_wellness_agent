import { getOpikClient } from "./opikClient";

export async function logToOpik(
  input: unknown,
  output: unknown,
  promptVersion: string,
) {
  const opikClient = getOpikClient();

  const trace = opikClient.trace({
    name: "Workday Wellness Agent Run",
    input,
    output,
    metadata: {
      promptVersion,
      model: "gemini-3-flash-preview",
    },
  });

  trace.end();
  await opikClient.flush();
}