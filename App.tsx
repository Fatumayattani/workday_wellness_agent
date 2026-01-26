
import React, { useState } from 'react';
import Header from './components/Header';
import WorkloadForm from './components/WorkloadForm';
import RecommendationDisplay from './components/RecommendationDisplay';
import { AppState, WorkloadData } from './types';
import { getWellnessRecommendation } from './services/geminiService';
import Logo from './components/Logo';

const App: React.FC = () => {
  const [state, setState] = useState<AppState>({
    data: {
      meetingDensity: 'Medium',
      longestBlockMinutes: 45,
      timeSinceLastBreakMinutes: 120,
      remainingMeetings: 3,
      stressLevel: 5,
      timeOfDay: 'Mid-Morning',
    },
    recommendation: null,
    loading: false,
    error: null,
  });

  const handleDataChange = (newData: WorkloadData) => {
    setState(prev => ({ ...prev, data: newData }));
  };

  const handleSubmit = async () => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    try {
      const rec = await getWellnessRecommendation(state.data);
      setState(prev => ({ ...prev, recommendation: rec, loading: false }));
    } catch (err: any) {
      setState(prev => ({ ...prev, error: err.message, loading: false }));
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      
      <main className="flex-grow max-w-5xl mx-auto px-4 py-8 w-full">
        <div className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-10">
          <div className="flex-1 space-y-4">
            <div className="inline-block bg-brand-yellow/20 text-brand-dark px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-brand-yellow/30">
              Wellness Assistant
            </div>
            <h2 className="text-5xl font-black text-slate-900 tracking-tight leading-[1.1]">
                Work Better, <br/>
                <span className="text-brand-pink underline decoration-brand-yellow/50 decoration-4 underline-offset-4">Not Just Harder.</span>
            </h2>
            <p className="text-slate-500 text-xl max-w-lg leading-relaxed font-medium">
                Bloom analyzes your meeting signals to find the perfect moment for a recharge.
            </p>
          </div>
          <div className="relative group">
             <div className="absolute inset-0 bg-brand-blue/20 rounded-[20%] blur-2xl group-hover:blur-3xl transition-all opacity-40"></div>
             <div className="relative w-40 h-40 md:w-56 md:h-56 p-4 bg-white rounded-[25%] shadow-2xl border border-white rotate-1 hover:rotate-0 transition-transform duration-500">
                <Logo className="w-full h-full" />
                <div className="absolute -bottom-4 -right-4 bg-white px-5 py-2.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-2 animate-bounce">
                    <span className="text-sm font-black text-brand-dark tracking-tight">Hi! I'm Bloom.</span>
                </div>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Added missing props and completed truncated JSX tags */}
            <WorkloadForm 
              data={state.data} 
              onChange={handleDataChange}
              onSubmit={handleSubmit}
              isLoading={state.loading}
            />
          </div>
          <div className="lg:col-span-7">
            <RecommendationDisplay 
              recommendation={state.recommendation} 
              error={state.error} 
            />
          </div>
        </div>
      </main>
      
      <footer className="bg-white border-t border-slate-100 py-8">
        <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-slate-400 text-sm">© 2024 Bloom Wellness. Stay mindful, stay productive.</p>
        </div>
      </footer>
    </div>
  );
};

// Fix: Add default export to resolve error in index.tsx
export default App;
