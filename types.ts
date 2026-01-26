
export type MeetingDensity = 'Low' | 'Medium' | 'High';

export interface WorkloadData {
  meetingDensity: MeetingDensity;
  longestBlockMinutes: number;
  timeSinceLastBreakMinutes: number;
  remainingMeetings: number;
  stressLevel: number;
  timeOfDay: string;
}

export interface WellnessRecommendation {
  intervene: boolean;
  break_type: string;
  duration_minutes: number;
  reasoning: string;
}

export interface AppState {
  data: WorkloadData;
  recommendation: WellnessRecommendation | null;
  loading: boolean;
  error: string | null;
}
