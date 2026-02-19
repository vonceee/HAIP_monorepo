import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { THEME_STYLES } from "../theme";

// Inferring ThemeColors type
type ThemeColors = (typeof THEME_STYLES)["General"];

interface LectureControlsProps {
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onPrev: () => void;
  theme: ThemeColors;
  isFirstSlide?: boolean;
  isLastSlide?: boolean;
}

export const LectureControls: React.FC<LectureControlsProps> = ({
  currentStep,
  totalSteps,
  onNext,
  onPrev,
  theme,
  isFirstSlide = false,
  isLastSlide = false,
}) => {
  return (
    <div className="flex-none p-4 sm:p-6 bg-black/10 border-t border-white/5 backdrop-blur-sm z-20 relative">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <button
          onClick={onPrev}
          disabled={isFirstSlide}
          className={`flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-bold transition-all ${
            isFirstSlide
              ? "opacity-0 pointer-events-none"
              : "bg-white/10 hover:bg-white/20 text-white"
          }`}
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          <span className="hidden sm:inline">Previous</span>
        </button>

        {/* Progress Dots */}
        <div className="flex space-x-1.5 sm:space-x-2">
          {Array.from({ length: totalSteps }).map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentStep
                  ? `w-6 sm:w-8 ${theme.buttonBg}`
                  : "w-1.5 sm:w-2 bg-white/30"
              }`}
            />
          ))}
        </div>

        <button
          onClick={onNext}
          className={`flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-bold transition-all shadow-lg ${theme.buttonBg} ${theme.buttonHover} text-white`}
        >
          <span className="hidden sm:inline">
            {isLastSlide ? "Finish Mission" : "Next Section"}
          </span>
          <span className="sm:hidden">{isLastSlide ? "Finish" : "Next"}</span>
          <ChevronRight className="w-5 h-5 ml-2" />
        </button>
      </div>
    </div>
  );
};
