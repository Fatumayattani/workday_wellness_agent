import { Opik } from "opik";

let client: Opik | null = null;

export function getOpikClient(): Opik | null {
  if (client) return client;

  const apiKey = process.env.OPIK_API_KEY;
  if (!apiKey) {
    console.warn("OPIK_API_KEY missing, Opik disabled");
    return null;
  }

  client = new Opik({
    apiKey,
    projectName: "workday-wellness-agent",
    workspaceName: "default",
  });

  return client;
}