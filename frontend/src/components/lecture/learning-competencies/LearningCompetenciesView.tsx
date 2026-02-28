import React, { useEffect, useState } from "react";
import { Lecture } from "../../../types";
import { Badge } from "@/components/ui/badge";
import { Target, BookOpen } from "lucide-react";
import { THEME_STYLES } from "../theme";
import { CheckCircle2, ArrowRight } from "lucide-react";

interface LearningCompetenciesViewProps {
  lecture: Lecture;
}

export const LearningCompetenciesView: React.FC<
  LearningCompetenciesViewProps
> = ({ lecture }) => {
  const [isVisible, setIsVisible] = useState(false);
  const theme = THEME_STYLES.General;

  const sections = lecture.sections || [];
  const competencies = lecture.competencies || [];

  useEffect(() => {
    const timer = window.setTimeout(() => setIsVisible(true), 100);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div
      className={`h-full w-full mx-auto flex flex-col flex-1 min-h-[calc(100vh-120px)] transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      {/* Main Content */}
      <div className="flex flex-col lg:flex-row flex-1 overflow-y-auto lg:overflow-hidden">
        {/* Left: Modules */}
        <div className="shrink-0 lg:flex-1 lg:overflow-y-auto px-6 py-5">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className={`w-4 h-4 ${theme.accentColor}`} />
            <h3 className="text-xs font-bold uppercase tracking-widest">
              Course Modules
            </h3>
          </div>

          <div className="space-y-2">
            {sections.length > 0 ? (
              sections.map((section, index) => (
                <div
                  key={section.id || index}
                  className="group flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-black/40 backdrop-blur-md hover:bg-black/60 hover:border-white/20 transition-all duration-300 shadow-xl"
                >
                  {/* Index number */}
                  <div className="shrink-0 flex items-center justify-center w-9 h-9 rounded-lg bg-black/40 border border-white/10">
                    <span
                      className={`text-xs font-black tabular-nums ${theme.accentColor}`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-slate-200 text-lg leading-snug group-hover:text-white transition-colors truncate">
                      {section.title ||
                        (index === 0
                          ? "Introduction"
                          : index === 1
                            ? "Effect Analysis"
                            : `Module ${index + 1}`)}
                    </h4>
                  </div>

                  {/* Hover arrow */}
                  <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-slate-400 group-hover:translate-x-0.5 transition-all shrink-0" />
                </div>
              ))
            ) : (
              <div className="text-sm text-slate-500 text-center py-16 border border-dashed border-white/10 rounded-xl bg-black/20">
                No modules available for this lecture.
              </div>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="hidden lg:block w-px bg-white/8 shrink-0" />
        <div className="block lg:hidden h-px w-full bg-white/8 shrink-0 my-2" />

        {/* Right: Competencies */}
        <div className="w-full lg:w-[440px] xl:w-[550px] shrink-0 lg:overflow-y-auto px-6 lg:px-5 py-5">
          <div className="flex items-center gap-2 mb-4">
            <Target className={`w-4 h-4 ${theme.accentColor}`} />
            <h3 className="text-xs font-bold uppercase tracking-widest">
              Learning Competencies
            </h3>
          </div>

          <ul className="space-y-3">
            {competencies.map((comp, i) => (
              <li
                key={i}
                className="group relative flex flex-col gap-2.5 p-4 rounded-xl border border-white/10 bg-black/40 backdrop-blur-md hover:bg-black/60 hover:border-white/20 transition-all duration-300 overflow-hidden shadow-xl min-h-[120px]"
              >
                {/* Accent bar */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-[3px] ${theme.buttonBg} opacity-40 group-hover:opacity-80 transition-opacity rounded-l-xl`}
                />

                <div className="flex items-center justify-between gap-3 pl-3">
                  <Badge
                    variant="outline"
                    className="font-mono text-sm border-white/15 bg-black/30 text-slate-400 px-2 py-0.5 tracking-wider"
                  >
                    {comp.code}
                  </Badge>
                  <CheckCircle2
                    className={`w-5 h-5 group-hover:text-slate-400 transition-colors shrink-0`}
                  />
                </div>

                <p className="text-sm leading-relaxed pl-3 group-hover:text-slate-300 transition-colors">
                  {comp.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
