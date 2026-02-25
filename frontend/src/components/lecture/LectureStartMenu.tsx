import React, { useEffect, useState, useRef } from "react";
import { Lecture } from "../../types";
import { Clock, ArrowRight, Layers } from "lucide-react";
import { Button } from "../ui/button";
import { LectureTopBar } from "./layout/LectureTopBar";
import { THEME_STYLES } from "./theme";

export interface LectureStartMenuProps {
  lecture: Lecture;
  onStart: () => void;
  onBack: () => void;
}

export const LectureStartMenu: React.FC<LectureStartMenuProps> = ({
  lecture,
  onStart,
  onBack,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const theme = THEME_STYLES.General;

  const sections = lecture.sections || [];

  useEffect(() => {
    const timer = window.setTimeout(() => setIsVisible(true), 100);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div
      className={`h-screen fixed inset-0 z-50 flex flex-col font-sans text-white overflow-hidden bg-gradient-to-br ${theme.bgGradient}`}
      ref={containerRef}
    >
      {/* Background Layers */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-40">
          <img
            src={lecture.imageUrl}
            alt="Background"
            className="w-full h-full object-cover filter blur-xl scale-110"
          />
        </div>
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.8)_100%)]" />
      </div>

      <div className="relative z-10 flex flex-col h-full w-full">
        <LectureTopBar
          topic={lecture.topic}
          onBack={onBack}
          backLabel="Back to Lectures"
          theme={theme}
        />

        <div className="flex-1 overflow-y-auto px-6 py-12 md:py-20 custom-scrollbar flex items-center">
          <div
            className={`max-w-6xl mx-auto w-full transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left Column - Image Container */}
              <div className="order-2 lg:order-1 relative group w-full max-w-md mx-auto lg:max-w-none">
                {/* Glow effect */}
                <div
                  className={`absolute -inset-4 bg-gradient-to-tr ${theme.bgGradient} rounded-[2.5rem] blur-2xl opacity-20 group-hover:opacity-40 transition duration-700`}
                />
                <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black/40 aspect-[4/3] lg:aspect-square flex items-center justify-center pointer-events-none">
                  <img
                    src={lecture.imageUrl}
                    alt={lecture.title}
                    className="w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.5)]" />
                </div>
              </div>

              {/* Right Column - Info */}
              <div className="order-1 lg:order-2 flex flex-col gap-6 lg:gap-8 text-center lg:text-left">
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                  <div
                    className={`px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-xs font-black uppercase tracking-widest ${theme.accentColor}`}
                  >
                    {lecture.topic}
                  </div>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[1.05] text-white">
                  {lecture.title}
                </h1>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0">
                  {lecture.description}
                </p>

                {/* Stats */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 py-6 border-y border-white/10">
                  <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10 shadow-inner">
                    <Clock className={`w-5 h-5 ${theme.accentColor}`} />
                    <span className="text-sm font-bold text-slate-200 uppercase tracking-wide">
                      {lecture.readTime} min read
                    </span>
                  </div>
                  <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10 shadow-inner">
                    <Layers className={`w-5 h-5 ${theme.accentColor}`} />
                    <span className="text-sm font-bold text-slate-200 uppercase tracking-wide tabular-nums">
                      {sections.length} Modules
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch justify-center lg:justify-start gap-4 pt-2">
                  <Button
                    onClick={onStart}
                    size="lg"
                    className={`h-14 px-8 font-black text-sm uppercase tracking-widest ${theme.buttonBg} ${theme.buttonHover} text-white border-0 ring-0 rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all flex-1 sm:flex-none`}
                  >
                    Start Mission
                    <ArrowRight className="ml-3 w-5 h-5" />
                  </Button>
                  <Button
                    onClick={onBack}
                    size="lg"
                    variant="outline"
                    className="h-14 px-8 font-black text-sm uppercase tracking-widest bg-white/5 hover:bg-white/10 text-white border-white/10 hover:border-white/20 rounded-xl shadow-lg transition-all flex-1 sm:flex-none"
                  >
                    Abort
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
