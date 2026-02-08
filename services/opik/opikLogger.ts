import { opikClient } from "./opikClient";

/**
 * Send a trace to Opik.
 */
export async function logToOpik(
  input: unknown,
  output: unknown,
  promptVersion: string,
) {
  const trace = opikClient.trace({
    name: "Workday Wellness Agent Run",
    input: input as Record<string, unknown>,
    output: output as Record<string, unknown>,
    metadata: {
      promptVersion,
      model: "gemini-3-flash-preview",
    },
  });

  trace.end();
  await opikClient.flush();
}