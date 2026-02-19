import React from "react";
import { Lecture } from "../../../types";
import { THEME_STYLES } from "../theme";
import { CheckCircle, Home, Trophy } from "lucide-react";

// Inferring ThemeColors type from the THEME_STYLES object values
type ThemeColors = (typeof THEME_STYLES)["General"];

interface LectureCompleteProps {
  lecture: Lecture;
  theme: ThemeColors;
  onHome: () => void;
}

export const LectureComplete: React.FC<LectureCompleteProps> = ({
  lecture,
  theme,
  onHome,
}) => {
  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[60vh] text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="relative">
        <div
          className={`absolute inset-0 ${theme.bgGradient} opacity-20 blur-3xl rounded-full animate-pulse`}
        ></div>
        <Trophy
          className={`w-32 h-32 ${theme.accentColor} drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] relative z-10`}
          strokeWidth={1}
        />
        <CheckCircle
          className="w-12 h-12 text-green-400 absolute bottom-0 right-0 bg-black/50 rounded-full border-4 border-black z-20"
          fill="currentColor"
        />
      </div>

      <div className="space-y-4 max-w-2xl mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 uppercase tracking-tighter">
          Mission Accomplished
        </h2>
        <p className="text-xl md:text-2xl text-slate-300 font-light">
          You have successfully completed the{" "}
          <strong className="text-white">{lecture.topic}</strong> module.
        </p>
        <p className="text-slate-400">
          Great job! You've gained valuable knowledge on how to predict, prepare
          for, and survive {lecture.topic.toLowerCase()} hazards.
        </p>
      </div>

      <div className="pt-8">
        <button
          onClick={onHome}
          className={`group relative px-8 py-4 ${theme.buttonBg} rounded-xl font-bold text-white shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95 overflow-hidden`}
        >
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          <div className="flex items-center space-x-3 relative z-10">
            <Home className="w-6 h-6" />
            <span className="text-lg tracking-wide uppercase">
              Return to Base
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};
