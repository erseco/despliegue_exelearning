import React from 'react';
import { Terminal, Copy } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, title = 'Terminal' }) => {
  return (
    <div className="rounded-lg overflow-hidden bg-slate-900 border border-slate-700 shadow-2xl my-4 w-full max-w-4xl mx-auto">
      <div className="flex items-center justify-between px-4 py-2 bg-slate-800 border-b border-slate-700">
        <div className="flex items-center gap-2">
          <Terminal size={16} className="text-blue-400" />
          <span className="text-xs font-mono text-slate-300">{title}</span>
        </div>
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
        </div>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="font-mono text-sm md:text-base leading-relaxed text-green-300 whitespace-pre-wrap">
          {code}
        </pre>
      </div>
    </div>
  );
};