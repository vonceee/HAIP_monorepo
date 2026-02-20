import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { LectureObjectivesModel } from "./types";
import { ArrowRight, ChevronLeft, Target, Check } from "lucide-react";
import { THEME_STYLES } from "../theme";

interface LearningObjectivesViewProps {
  data: LectureObjectivesModel;
  onNext?: () => void;
  onBack?: () => void;
}

export const LearningObjectivesView: React.FC<LearningObjectivesViewProps> = ({
  data,
  onNext,
  onBack,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const theme = THEME_STYLES.General;

  useEffect(() => {
    const timer = window.setTimeout(() => setIsVisible(true), 100);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div
      className={`h-full w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16 items-center lg:items-stretch justify-center flex-1 min-h-[calc(100vh-120px)] p-1 lg:p-0 transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      {/* Left Column: Header & Context */}
      <div className="flex-1 w-full lg:max-w-xl space-y-6 flex flex-col justify-center lg:h-full lg:py-12">
        <div className="space-y-4 text-center lg:text-left">
          <div className="inline-flex items-center justify-center lg:justify-start">
            <div
              className={`p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-xl`}
            >
              <Target className={`w-8 h-8 ${theme.accentColor}`} />
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none drop-shadow-2xl text-white">
              {data.title}
            </h2>
            <p className="text-slate-300 text-base md:text-xl font-light mt-4 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              complete the following objectives to proceed.
            </p>
          </div>
        </div>
      </div>

      {/* Right Column: Objectives List & Actions */}
      <div className="w-full lg:flex-1 flex flex-col gap-6 lg:max-w-2xl lg:py-0">
        {/* Objectives List */}
        <ul className="grid gap-3 md:gap-4 w-full flex-1 content-center">
          {data.objectives.map((objective) => (
            <li
              key={objective.id}
              className="group flex items-start gap-4 p-4 rounded-xl border border-white/10 bg-black/40 backdrop-blur-md hover:bg-black/50 transition-all duration-300"
            >
              <div
                className={`mt-1 p-1 rounded-full bg-white/5 border border-white/10 ${theme.accentColor} shadow-[0_0_10px_rgba(255,255,255,0.1)]`}
              >
                <Check className="w-3 h-3" />
              </div>
              <span className="text-slate-200 text-sm md:text-lg font-medium leading-relaxed">
                {objective.description}
              </span>
            </li>
          ))}
        </ul>

        {/* Action Footer */}
        <div className="sticky bottom-0 p-4 -mx-4 lg:mx-0 z-20 border-t border-white/10">
          <div className="flex items-center justify-between gap-4">
            {/* Back Button */}
            <div>
              {onBack && (
                <Button
                  variant="ghost"
                  onClick={onBack}
                  className="text-slate-400 hover:text-white hover:bg-white/5 uppercase tracking-wider text-xs md:text-sm"
                >
                  <ChevronLeft className="mr-2 w-4 h-4" /> Back
                </Button>
              )}
            </div>

            <Button
              onClick={onNext}
              size="lg"
              className={`flex-1 shadow-lg hover:shadow-cyan-500/20 transition-all font-black text-lg h-14 uppercase tracking-widest ${theme.buttonBg} ${theme.buttonHover} text-white border-0 ring-0 rounded-xl`}
            >
              Next <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
