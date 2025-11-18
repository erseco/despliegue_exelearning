import React from 'react';

interface TechIconProps {
  name: string;
  src: string;
  size?: number;
  className?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, src, size = 64, className = '' }) => {
  return (
    <div className={`flex flex-col items-center justify-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300 ${className}`}>
      <img 
        src={src} 
        alt={name} 
        style={{ width: size, height: 'auto', maxHeight: size }} 
        className="object-contain"
      />
      <span className="font-semibold text-slate-200 text-sm">{name}</span>
    </div>
  );
};