
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-10 h-10" }) => {
  return (
    <div className={`relative flex items-center justify-center overflow-hidden bg-brand-blue rounded-[20%] ${className}`}>
        {/* Simplified SVG representation of the logo character */}
        <svg viewBox="0 0 100 100" className="w-full h-full">
            {/* The Arch Background is the div's bg-brand-blue */}
            
            {/* Character Shoulders */}
            <path d="M10 100 Q10 70 50 70 Q90 70 90 100" fill="#F472B6" />
            
            {/* Character Head */}
            <circle cx="50" cy="45" r="22" fill="#F472B6" stroke="#111" strokeWidth="1" />
            
            {/* Hair Bun */}
            <circle cx="50" cy="23" r="7" fill="#111" />
            <path d="M45 23 Q50 20 55 23" stroke="#FBBF24" strokeWidth="2" fill="none" />
            
            {/* Glasses */}
            <circle cx="42" cy="45" r="6" fill="#FBBF24" stroke="#111" strokeWidth="1" />
            <circle cx="58" cy="45" r="6" fill="#FBBF24" stroke="#111" strokeWidth="1" />
            <path d="M48 45 L52 45" stroke="#111" strokeWidth="1.5" />
            
            {/* Smile & Nose */}
            <path d="M46 55 Q50 60 54 55" fill="none" stroke="#111" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M50 48 Q52 50 50 52" fill="none" stroke="#111" strokeWidth="0.5" />

            {/* Hands (Simplified) */}
            <path d="M35 50 Q30 35 35 70" fill="none" stroke="#F472B6" strokeWidth="8" strokeLinecap="round" opacity="0.4" />
            <path d="M65 50 Q70 35 65 70" fill="none" stroke="#F472B6" strokeWidth="8" strokeLinecap="round" opacity="0.4" />
        </svg>
    </div>
  );
};

export default Logo;
