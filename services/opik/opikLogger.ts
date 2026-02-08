import { getOpikClient } from "./opikClient";

export async function logToOpik(
  input: unknown,
  output: unknown,
  promptVersion: string,
) {
  const opikClient = getOpikClient();

  const trace = opikClient.trace({
    name: "Workday Wellness Agent Run",
    input: JSON.parse(JSON.stringify(input)),
    output: JSON.parse(JSON.stringify(output)),
    metadata: {
      promptVersion,
      model: "gemini-3-flash-preview",
    },
  });

  trace.end();
  await opikClient.flush();
}