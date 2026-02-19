import React from "react";
import { ArrowLeft } from "lucide-react";

interface LectureTopBarProps {
  topic: string;
  onBack: () => void;
  backLabel?: string;
  theme: {
    accentColor: string;
    buttonBg: string; // Used for consistency if we add more controls later
  };
  extraContent?: React.ReactNode; // For the right side content if it varies
}

export const LectureTopBar: React.FC<LectureTopBarProps> = ({
  topic,
  onBack,
  backLabel = "Back",
  theme,
  extraContent,
}) => {
  return (
    <div className="flex-none flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 bg-black/10 border-b border-white/5 backdrop-blur-sm z-20 relative">
      <button
        onClick={onBack}
        className="group flex items-center text-slate-300 hover:text-white transition-colors font-medium"
      >
        <div className="p-1.5 bg-white/5 rounded-lg border border-white/10 shadow-sm mr-2 sm:mr-3 group-hover:bg-white/10">
          <ArrowLeft className="w-4 h-4" />
        </div>
        <span className="text-xs uppercase tracking-wide hidden sm:inline">
          {backLabel}
        </span>
        {/* Mobile short label if needed, but the design uses hidden sm:inline. 
            LectureView had a specific mobile label "Exit" for the slides view. 
            We can handle that via the backLabel prop or just stick to the design. */}
        <span className="text-xs uppercase tracking-wide sm:hidden">
          {backLabel === "Exit Mission" ? "Exit" : backLabel}
        </span>
      </button>

      {extraContent || (
        <div className="flex items-center space-x-3">
          <div
            className={`px-3 py-1 bg-black/20 border border-white/10 rounded text-[10px] font-bold uppercase tracking-wider ${theme.accentColor}`}
          >
            {topic} <span className="hidden sm:inline">Protocol</span>
          </div>
        </div>
      )}
    </div>
  );
};
