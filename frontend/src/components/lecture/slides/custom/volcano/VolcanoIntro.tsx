import React from "react";
import { BookOpen, Play } from "lucide-react";

import { THEME_STYLES } from "../../../theme";

export interface VolcanoIntroContent {
  subTitle: string;
  secondaryInfo: string;
  reference: string;
}

interface VolcanoIntroProps {
  topic: string;
  content: VolcanoIntroContent;
}

export const VolcanoIntro: React.FC<VolcanoIntroProps> = ({
  topic,
  content,
}) => {
  const theme = THEME_STYLES.General;

  let mainBody = content.secondaryInfo;

  const VideoVisual = () => {
    return (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden p-6 lg:p-12">
        <div className="w-full max-w-lg aspect-video bg-black/50 rounded-2xl border border-white/10 shadow-2xl flex flex-col items-center justify-center gap-4 group cursor-pointer hover:border-white/20 hover:bg-black/60 transition-all overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center border border-white/20 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
            <Play size={24} className="text-white ml-1" />
          </div>

          <div className="text-center relative z-10">
            <p className="text-sm font-bold text-white uppercase tracking-widest drop-shadow-md">
              Earthquake Overview
            </p>
            <p className="text-xs text-slate-400 mt-2 font-mono">
              VIDEO PLACEHOLDER (03:45)
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full h-full flex flex-col font-sans text-white pointer-events-auto">
      {/* Main Content Split Area */}
      <main className="flex-1 flex flex-col lg:flex-row w-full overflow-hidden">
        {/* Left: Content panel */}
        <div className="flex-1 flex flex-col justify-center p-8 lg:p-12 xl:p-16 border-b lg:border-b-0 lg:border-r border-white/10 relative z-10 w-full overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
          <div className="max-w-2xl mx-auto lg:mx-0 w-full animate-in slide-in-from-left-10 duration-700 fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[0.9] text-white drop-shadow-xl mb-6">
              {topic}
            </h1>

            <h3
              className={`text-xl md:text-2xl font-medium ${theme.accentColor} mb-8 tracking-wide drop-shadow-md leading-snug`}
            >
              {content.subTitle}
            </h3>

            <div className="w-16 h-1 bg-white/20 rounded-full mb-8 shadow-sm" />

            {mainBody && (
              <p className="text-lg md:text-xl text-slate-200 leading-relaxed font-light mb-8 text-pretty lowercase">
                {mainBody}
              </p>
            )}

            {/* Reference */}
            {content.reference && (
              <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-lg bg-black/40 border border-white/10 backdrop-blur-sm shadow-lg font-mono text-xs text-slate-300 tracking-wider uppercase">
                <BookOpen size={16} className={`${theme.accentColor}`} />
                <span>Reference: {content.reference}</span>
              </div>
            )}
          </div>
        </div>

        {/* Right: Visual panel */}
        <div className="relative flex-1 flex flex-col items-center justify-start lg:justify-center bg-black/20 backdrop-blur-sm lg:backdrop-blur-none border-t lg:border-t-0 border-white/5 shadow-inner overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.05)_0%,_transparent_70%)] pointer-events-none" />

          <div className="relative z-10 w-full h-full min-h-[50vh] lg:min-h-full flex items-center">
            <VideoVisual />
          </div>
        </div>
      </main>
    </div>
  );
};
