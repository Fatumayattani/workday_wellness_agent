
import React from 'react';
import { WorkloadData, MeetingDensity } from '../types';

interface WorkloadFormProps {
  data: WorkloadData;
  onChange: (data: WorkloadData) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

const WorkloadForm: React.FC<WorkloadFormProps> = ({ data, onChange, onSubmit, isLoading }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    onChange({
      ...data,
      [name]: name === 'meetingDensity' || name === 'timeOfDay' ? value : Number(value),
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
      <h2 className="text-lg font-semibold text-slate-800 mb-6 flex items-center gap-2">
        <i className="fa-solid fa-sliders text-indigo-500"></i>
        Current Workload Signals
      </h2>
      
      <div className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-1.5">Meeting Density</label>
            <select
              name="meetingDensity"
              value={data.meetingDensity}
              onChange={handleChange}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-slate-700 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-1.5">Time of Day</label>
            <select
              name="timeOfDay"
              value={data.timeOfDay}
              onChange={handleChange}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-slate-700 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
            >
              <option value="Early Morning">Early Morning</option>
              <option value="Mid-Morning">Mid-Morning</option>
              <option value="Lunchtime">Lunchtime</option>
              <option value="Early Afternoon">Early Afternoon</option>
              <option value="Late Afternoon">Late Afternoon</option>
              <option value="Evening">Evening</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-1.5">
              Longest Meeting Block (mins)
            </label>
            <input
              type="number"
              name="longestBlockMinutes"
              value={data.longestBlockMinutes}
              onChange={handleChange}
              min="0"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-slate-700 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-1.5">
              Time Since Last Break (mins)
            </label>
            <input
              type="number"
              name="timeSinceLastBreakMinutes"
              value={data.timeSinceLastBreakMinutes}
              onChange={handleChange}
              min="0"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-slate-700 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-600 mb-1.5">
            Remaining Meetings Today
          </label>
          <input
            type="number"
            name="remainingMeetings"
            value={data.remainingMeetings}
            onChange={handleChange}
            min="0"
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-slate-700 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
          />
        </div>

        <div>
          <div className="flex justify-between items-center mb-1.5">
            <label className="text-sm font-medium text-slate-600">Stress Level (1-10)</label>
            <span className="text-sm font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">
              {data.stressLevel}
            </span>
          </div>
          <input
            type="range"
            name="stressLevel"
            min="1"
            max="10"
            step="1"
            value={data.stressLevel}
            onChange={handleChange}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
          />
          <div className="flex justify-between text-[10px] text-slate-400 mt-1 uppercase tracking-wider font-semibold">
            <span>Relaxed</span>
            <span>Balanced</span>
            <span>Burnt Out</span>
          </div>
        </div>

        <button
          onClick={onSubmit}
          disabled={isLoading}
          className={`w-full py-4 rounded-xl font-bold text-white transition-all shadow-md shadow-indigo-100 ${
            isLoading 
            ? 'bg-slate-400 cursor-not-allowed' 
            : 'bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98]'
          }`}
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <i className="fa-solid fa-circle-notch animate-spin"></i>
              Analyzing Data...
            </span>
          ) : (
            'Analyze Wellbeing'
          )}
        </button>
      </div>
    </div>
  );
};

export default WorkloadForm;
