import { GoogleGenAI, Type } from "@google/genai";
import { WorkloadData, WellnessRecommendation } from "../types";

// Import Opik logger
import { logToOpik } from "./opik/opikLogger";

export const getWellnessRecommendation = async (data: WorkloadData): Promise<WellnessRecommendation> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `
    As a Workday Wellness Agent, analyze the following workload signals and stress level:
    - Meeting Density: ${data.meetingDensity}
    - Longest Continuous Meeting Block: ${data.longestBlockMinutes} minutes
    - Time Since Last Break: ${data.timeSinceLastBreakMinutes} minutes
    - Remaining Meetings Today: ${data.remainingMeetings}
    - Self-Reported Stress Level (1-10): ${data.stressLevel}
    - Time of Day: ${data.timeOfDay}

    Rules:
    1. Avoid medical claims.
    2. Prefer breaks between 2 and 10 minutes.
    3. Be conservative with interruptions.
    4. If meeting density and stress are low, do not intervene (intervene = false).
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            intervene: { type: Type.BOOLEAN },
            break_type: { type: Type.STRING, description: "Type of break (e.g., Stretching, Deep Breathing, Hydration, Short Walk)" },
            duration_minutes: { type: Type.NUMBER },
            reasoning: { type: Type.STRING }
          },
          required: ["intervene", "break_type", "duration_minutes", "reasoning"]
        }
      }
    });

    const result = JSON.parse(response.text?.trim() || '{}') as WellnessRecommendation;

    // Log to Opik
    await logToOpik(data, result, "v1");

    return result;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to get wellness recommendation. Please try again.");
  }
};

