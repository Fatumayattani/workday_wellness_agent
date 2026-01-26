# 🌸 Workday Wellness Agent

Workday Wellness Agent (Bloom) is a sophisticated wellness companion designed for the modern professional. It analyzes calendar-derived workload signals and subjective stress levels to determine the optimal moment for a high-impact, short wellness break.

![Workday Wellness Agent Demo](/public/wlogo.png)


## ✨ Features

- **Intelligent Workload Analysis**: Processes meeting density, continuous blocks, and time since last break.
- **Stress-Aware Intervention**: Uses self-reported stress levels to calibrate the urgency of breaks.
- **Gemini-Powered Reasoning**: Leverages the `gemini-3-flash-preview` model for context-aware, conservative, and medically safe wellness suggestions.
- **Proactive Burnout Prevention**: Specifically designed to intervene *before* burnout peaks.

## 🧠 The Wellness Logic

Bloom follows a strict set of heuristics to ensure interventions are helpful, not distracting:

1.  **Conservative Interruption**: Bloom values your deep work and only suggests breaks when workload signals indicate a high risk of fatigue.
2.  **Short & Impactful**: Break durations are kept between **2 to 10 minutes** to fit seamlessly into a busy schedule.
3.  **Low-Activity Grace**: If meeting density and stress levels are both "Low", Bloom will not intervene.
4.  **No Medical Claims**: Advice is focused purely on wellness (stretching, breathing, hydration) and never makes medical diagnoses or prescriptions.

## 📊 System Flow Diagram

```mermaid
graph TD
    A[User Input: Workload+Stress] --> B{Bloom Agent Analysis}
    B --> C[Gemini AI Contextualization]
    C --> D{Intervene?}
    D -- No --> E[Steady As You Go: Positive Reinforcement]
    D -- Yes --> F[Generate Specific Break Recommendation]
    F --> G[Activity Type: e.g., Breathing]
    F --> H[Duration: 2-10 mins]
    F --> I[AI Reasoning: Context-specific motivation]
    G & H & I --> J[UI Update: Recommendation Display]
```

## 🏗️ Architecture

- **Frontend**: React 19 + Tailwind CSS
- **Intelligence**: Google Gemini API (`@google/genai`)
- **Icons**: Font Awesome 6
- **State Management**: React Hooks (useState)

## 🚀 Technical Implementation

Bloom utilizes the Gemini Flash model to process a real-time data object:

```typescript
export interface WorkloadData {
  meetingDensity: 'Low' | 'Medium' | 'High';
  longestBlockMinutes: number;
  timeSinceLastBreakMinutes: number;
  remainingMeetings: number;
  stressLevel: number; // 1-10 scale
  timeOfDay: string;
}
```

The model returns a structured JSON response to drive the UI state:

```json
{
  "intervene": true,
  "break_type": "Deep Breathing",
  "duration_minutes": 5,
  "reasoning": "You've been in meetings for 120 minutes straight. A quick reset will help your focus for the next block."
}
```

## 🎨 Branding & Aesthetics

The interface is built with the **Bloom Design System**, featuring:
- **Primary Pink (`#F472B6`)**: Energetic and empathetic.
- **Accent Yellow (`#FBBF24`)**: Warmth and focus.
- **Soft Blue (`#60A5FA`)**: Calmness and stability.
- **Inter Font Family**: For maximum readability.

---
*Stay mindful, stay productive.*