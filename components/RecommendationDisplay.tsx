
import React from 'react';
import { WellnessRecommendation } from '../types';

interface RecommendationDisplayProps {
  recommendation: WellnessRecommendation | null;
  error: string | null;
}

const RecommendationDisplay: React.FC<RecommendationDisplayProps> = ({ recommendation, error }) => {
  if (error) {
    return (
      <div className="bg-red-50 border border-red-100 rounded-2xl p-6 text-center">
        <i className="fa-solid fa-triangle-exclamation text-red-500 text-3xl mb-3"></i>
        <h3 className="text-red-800 font-bold mb-1">Analysis Failed</h3>
        <p className="text-red-600 text-sm">{error}</p>
      </div>
    );
  }

  if (!recommendation) {
    return (
      <div className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col items-center text-center justify-center h-full min-h-[300px] border-dashed">
        <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
          <i className="fa-solid fa-robot text-slate-300 text-3xl"></i>
        </div>
        <h3 className="text-slate-500 font-medium">Ready for input</h3>
        <p className="text-slate-400 text-sm max-w-xs mt-2">
          Update your workday signals to see if you need a wellness break.
        </p>
      </div>
    );
  }

  if (!recommendation.intervene) {
    return (
      <div className="bg-green-50 border border-green-100 rounded-2xl p-8 text-center h-full min-h-[300px] flex flex-col items-center justify-center">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 shadow-sm">
          <i className="fa-solid fa-circle-check text-4xl"></i>
        </div>
        <h3 className="text-green-900 font-bold text-xl mb-2">Steady As You Go!</h3>
        <p className="text-green-700 text-sm max-w-sm mb-6 leading-relaxed">
          {recommendation.reasoning}
        </p>
        <div className="bg-white px-4 py-2 rounded-full text-green-600 text-xs font-bold uppercase tracking-wider border border-green-200">
          No Intervention Needed
        </div>
      </div>
    );
  }

  const getIcon = (type: string) => {
    const t = type.toLowerCase();
    if (t.includes('walk')) return 'fa-person-walking';
    if (t.includes('breath') || t.includes('meditation')) return 'fa-wind';
    if (t.includes('stretch')) return 'fa-child-reaching';
    if (t.includes('water') || t.includes('hydration')) return 'fa-faucet-drip';
    return 'fa-mug-hot';
  };

  return (
    <div className="bg-indigo-600 rounded-2xl p-8 text-white h-full shadow-xl shadow-indigo-200 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <i className={`fa-solid ${getIcon(recommendation.break_type)} text-9xl`}></i>
      </div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-8 bg-indigo-500/30 w-fit px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-white/10">
          <span className="flex h-2 w-2 rounded-full bg-white animate-pulse"></span>
          Break Recommendation
        </div>

        <h3 className="text-3xl font-extrabold mb-2 leading-tight">
          Time for a {recommendation.duration_minutes}-minute {recommendation.break_type}
        </h3>
        
        <div className="h-1 w-16 bg-white/30 rounded-full mb-6"></div>

        <p className="text-indigo-100 text-lg leading-relaxed mb-8 font-medium">
          "{recommendation.reasoning}"
        </p>

        <div className="space-y-4">
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2 opacity-80">Suggested Activity</h4>
            <div className="flex items-center gap-3">
              <div className="bg-white text-indigo-600 w-10 h-10 rounded-lg flex items-center justify-center shadow-md">
                <i className={`fa-solid ${getIcon(recommendation.break_type)} text-xl`}></i>
              </div>
              <div>
                <div className="font-bold text-lg">{recommendation.break_type}</div>
                <div className="text-xs text-indigo-200">Target Duration: {recommendation.duration_minutes} mins</div>
              </div>
            </div>
          </div>
          
          <button className="w-full bg-white text-indigo-600 py-3 rounded-xl font-bold hover:bg-indigo-50 transition-colors shadow-lg active:scale-[0.98]">
            Start Break Timer
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecommendationDisplay;
