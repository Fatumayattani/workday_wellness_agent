import { Opik } from "opik";

let _opikClient: Opik | null = null;

export function getOpikClient() {
  if (_opikClient) return _opikClient;

  _opikClient = new Opik({
    // do NOT pass optionMatchers at all
    // only pass the bare minimum Opik needs to run
    loggers: [],
  });

  return _opikClient;
}