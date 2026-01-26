
import React from 'react';
import Logo from './Logo';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Logo className="w-9 h-9 border border-slate-100 shadow-sm" />
         <h1 className="text-xl font-bold text-slate-800">
  Workday<span className="text-brand-pink font-medium">agent</span>
</h1>

        </div>
        <div className="text-sm text-slate-500 font-medium hidden sm:flex items-center gap-3">
          <div className="flex items-center gap-1.5 bg-green-50 text-green-600 px-3 py-1 rounded-full border border-green-100">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-wider">Active</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
