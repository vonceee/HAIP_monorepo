import React, { useRef } from "react";
import { Lecture } from "../../types.ts";
import { Play, Clock } from "lucide-react";
import { THEME_STYLES } from "./theme";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

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
  const containerRef = useRef<HTMLDivElement>(null);

  const theme = THEME_STYLES.General;
  const TopicIcon = theme.icon;
  const titleSize =
    lecture.title.length > 20
      ? "text-3xl sm:text-4xl md:text-6xl"
      : "text-4xl sm:text-5xl md:text-7xl";

  return (
    <div
      className={`fixed inset-0 z-50 overflow-y-auto bg-gradient-to-br ${theme.bgGradient} text-white`}
      ref={containerRef}
    >
      {/* Background Image Layer */}
      <div className="fixed top-0 left-0 w-full h-[100lvh] opacity-40 pointer-events-none">
        <img
          src={lecture.imageUrl}
          alt="Background"
          className="w-full h-full object-cover filter blur-sm scale-110 will-change-transform"
        />
      </div>

      {/* Radial Gradient Overlay */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)] pointer-events-none" />

      {/* Content Wrapper */}
      <div className="relative min-h-full flex items-center justify-center p-4 sm:p-6">
        <div className="relative z-10 max-w-6xl w-full flex flex-col lg:flex-row gap-8 lg:gap-16 items-center animate-in fade-in zoom-in duration-500 py-6 lg:py-0">
          {/* Left Side: Mission Details */}
          <div className="flex-1 text-center lg:text-left space-y-6 w-full">
            {/* Mission Protocol Badge */}
            <Badge
              variant="outline"
              className={`inline-flex items-center px-4 py-1.5 rounded-full border-white/20 bg-black/40 backdrop-blur-md ${theme.accentColor} font-mono text-xs md:text-sm tracking-widest uppercase mb-2 shadow-lg hover:bg-black/50`}
            >
              <TopicIcon className="w-4 h-4 mr-2" />
              {lecture.topic}
            </Badge>

            {/* Title */}
            <h1
              className={`${titleSize} font-black uppercase tracking-tighter leading-none drop-shadow-[0_0_25px_rgba(0,0,0,0.8)]`}
            >
              {lecture.title}
            </h1>

            {/* Description */}
            <p className="text-slate-200 text-base md:text-xl font-light leading-relaxed border-l-4 border-white/20 pl-6 bg-gradient-to-r from-black/40 to-transparent p-2 rounded-r-lg backdrop-blur-sm text-left">
              {lecture.description}
            </p>

            {/* Stats: Duration & Difficulty */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
              <div className="bg-black/40 border border-white/10 px-6 py-3 rounded-xl backdrop-blur-md flex flex-col items-center lg:items-start min-w-[120px]">
                <div className="text-slate-400 text-[10px] uppercase tracking-wider mb-1 font-bold">
                  Duration
                </div>
                <div className="text-xl font-bold flex items-center text-white">
                  <Clock className="w-4 h-4 mr-2 text-slate-400" />
                  {lecture.readTime}:00
                </div>
              </div>
              <div className="bg-black/40 border border-white/10 px-6 py-3 rounded-xl backdrop-blur-md flex flex-col items-center lg:items-start min-w-[120px]">
                <div className="text-slate-400 text-[10px] uppercase tracking-wider mb-1 font-bold">
                  Difficulty
                </div>
                <div className={`text-xl font-bold ${theme.accentColor}`}>
                  {lecture.difficulty.toUpperCase()}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Mission Card */}
          <Card className="w-full max-w-md bg-black/50 backdrop-blur-xl border-white/10 rounded-2xl shadow-2xl relative overflow-hidden group border">
            {/* Card Accent Line */}
            <div
              className={`absolute top-0 left-0 w-full h-1 ${theme.buttonBg}`}
            />

            <CardContent className="space-y-6 pt-8">
              {/* Competencies List */}
              <ul className="space-y-4">
                {lecture.competencies.slice(0, 3).map((comp, i) => (
                  <li
                    key={i}
                    className="flex items-start text-base sm:text-lg text-slate-200"
                  >
                    <div
                      className={`mt-2 mr-3 w-2 h-2 rounded-full ${theme.buttonBg} shadow-[0_0_8px_currentColor] flex-shrink-0`}
                    />
                    <span className="leading-snug font-medium break-words min-w-0">
                      {comp.description}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Action Buttons */}
              <div className="space-y-4 pt-4">
                {/* Initialize Button */}
                <div className="relative">
                  <Button
                    size="lg"
                    onClick={onStart}
                    className={`w-full group/btn relative overflow-hidden ${theme.buttonBg} ${theme.buttonHover} text-white font-black uppercase tracking-wider py-6 sm:py-8 text-lg rounded-xl shadow-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] border-0 ring-0`}
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      Initialize <Play className="w-5 h-5 ml-2 fill-current" />
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-[-200%] transition-transform duration-700 ease-in-out" />
                  </Button>
                </div>

                {/* Abort Button */}
                <div className="relative">
                  <Button
                    variant="ghost"
                    onClick={onBack}
                    className="w-full text-xs text-slate-500 hover:text-white uppercase tracking-widest hover:bg-white/5"
                  >
                    Abort Mission
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
