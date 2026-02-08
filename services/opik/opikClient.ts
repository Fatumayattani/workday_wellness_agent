import Opik from "opik";

/**
 * Safe Opik client initialization.
 * Opik assumes several arrays exist and does not guard them internally.
 */
export const opikClient = new Opik({
  // REQUIRED to prevent optionMatcher.reduce crash
  optionMatchers: [],

  // Other pipelines (safe defaults)
  loggers: [],
  plugins: [],
  evaluators: [],
});