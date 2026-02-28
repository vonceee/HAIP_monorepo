import React, { useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface LectureControlsProps {
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onPrev: () => void;
  isFirstSlide?: boolean;
  isLastSlide?: boolean;
}

export const LectureControls: React.FC<LectureControlsProps> = ({
  currentStep,
  totalSteps,
  onNext,
  onPrev,
  isFirstSlide = false,
  isLastSlide = false,
}) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA"
      ) {
        return;
      }

      if (event.key === "ArrowLeft" && !isFirstSlide) {
        onPrev();
      } else if (event.key === "ArrowRight") {
        onNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onNext, onPrev, isFirstSlide]);
  return (
    <div className="flex-none p-4 bg-black/10 border-t border-white/5 backdrop-blur-sm z-20 relative">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        {/* Progress Dots (Left) */}
        <div className="flex space-x-1.5 sm:space-x-2 items-center">
          {Array.from({ length: totalSteps }).map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentStep
                  ? `w-6 md:w-8 bg-emerald-500`
                  : "w-1.5 md:w-2 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Navigation Controls (Right) */}
        <div className="flex items-center gap-4">
          <button
            onClick={onPrev}
            disabled={isFirstSlide}
            className={`flex items-center p-3 md:p-4 rounded-full bg-black/40 backdrop-blur-sm border-2 border-white/10 text-white transition-all group ${
              isFirstSlide
                ? "opacity-0 pointer-events-none"
                : "hover:border-emerald-500 hover:text-emerald-500 hover:scale-110 cursor-pointer"
            }`}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4 stroke-[2px] opacity-70 group-hover:opacity-100 transition-opacity" />
          </button>

          <button
            onClick={onNext}
            className={`flex items-center p-3 md:p-4 rounded-full bg-black/40 backdrop-blur-sm border-2 border-white/10 text-white hover:border-emerald-500 hover:text-emerald-500 transition-all hover:scale-110 group`}
            title={isLastSlide ? "Finish Mission" : "Next Section"}
            aria-label={isLastSlide ? "Finish Mission" : "Next Section"}
          >
            <ChevronRight className="w-4 h-4 stroke-[2px] opacity-70 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>
      </div>
    </div>
  );
};
