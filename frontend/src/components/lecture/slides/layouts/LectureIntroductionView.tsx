import React from "react";
import {
  Activity,
  ShieldAlert,
  ShieldCheck,
  TriangleAlert,
  Waves,
  Flame,
  Info,
  LucideIcon,
  Home,
  Mountain,
  Zap,
  HeartPulse,
  Skull,
  Coins,
  Users,
  BookOpen,
} from "lucide-react";

import { THEME_STYLES } from "../../theme";

export interface LectureIntroductionContent {
  subTitle: string;
  secondaryInfo: string;
  reference: string;
  stats: {
    label: string;
    description: string;
    icon: string;
  }[];
}

interface LectureIntroductionViewProps {
  topic: string;
  imageUrl: string;
  content: LectureIntroductionContent;
}

const iconMap: Record<string, LucideIcon> = {
  Activity,
  ShieldAlert,
  ShieldCheck,
  TriangleAlert,
  Waves,
  Flame,
  Info,
  Home,
  Mountain,
  Zap,
  HeartPulse,
  Skull,
  Coins,
  Users,
};

export const LectureIntroductionView: React.FC<
  LectureIntroductionViewProps
> = ({ topic, content }) => {
  const theme = THEME_STYLES.General;

  // Extract quoted text from secondaryInfo if present
  let mainBody = content.secondaryInfo;
  let emphasisQuote = "";

  const quoteMatch = content.secondaryInfo?.match(/["“](.*?)["”]/);
  if (quoteMatch) {
    emphasisQuote = quoteMatch[1];
    mainBody = content.secondaryInfo.replace(quoteMatch[0], "").trim();
  }

  // Right-side stats visual
  const StatsVisual = () => {
    if (!content.stats || content.stats.length === 0) {
      // if no stats, fallback to a simple visual or empty
      return <div className="text-white/50 text-sm">No analysis data</div>;
    }

    return (
      <div className="relative w-full h-full flex items-center justify-center p-6 lg:p-12 py-12">
        <div className="flex flex-col gap-8 w-full max-w-sm relative">
          {/* Connecting line */}
          <div className="absolute left-[1.125rem] top-8 bottom-8 w-px bg-white/20 z-0" />

          {content.stats.map((stat, i) => {
            const StatIcon = iconMap[stat.icon] || Info;
            return (
              <div
                key={i}
                className="flex items-start gap-6 group relative z-10 w-full animate-in slide-in-from-right-10 fade-in duration-500"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center border-2 transition-transform group-hover:scale-110 shadow-lg shrink-0 bg-black"
                  style={{
                    borderColor: `hsl(${150 + i * 30}, 80%, 50%)`,
                    color: `hsl(${150 + i * 30}, 80%, 60%)`,
                    boxShadow: `0 0 15px hsla(${150 + i * 30}, 80%, 50%, 0.2)`,
                  }}
                >
                  <StatIcon size={18} />
                </div>
                <div className="flex flex-col pt-2 group-hover:translate-x-1 transition-transform w-full">
                  <span className="text-sm font-bold tracking-widest uppercase text-white mb-2 drop-shadow-md">
                    {stat.label}
                  </span>
                  <span className="text-sm text-slate-300 leading-relaxed font-light text-pretty">
                    {stat.description}
                  </span>
                </div>
              </div>
            );
          })}
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
            {/* Tag Bar */}
            <div className="flex items-center justify-between mb-8 w-full">
              <div className="flex items-center gap-3">
                <div
                  className={`w-2 h-2 rounded-full ${theme.accentColor} animate-pulse`}
                />
                <span className="font-mono text-xs font-bold tracking-widest text-slate-400 uppercase">
                  Briefing: {topic}
                </span>
              </div>
            </div>

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
              <p className="text-lg md:text-xl text-slate-200 leading-relaxed font-light mb-8 text-pretty">
                {mainBody}
              </p>
            )}

            {/* Emphasis callout - Styled like the 'secondaryInfo' block in EarthquakeIntro */}
            {emphasisQuote && (
              <div className="p-6 rounded-xl bg-black/40 border-l-4 border-white/40 backdrop-blur-md mb-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-white/40" />
                <p className="text-lg text-white font-medium leading-relaxed italic drop-shadow-sm">
                  "{emphasisQuote}"
                </p>
              </div>
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
            <StatsVisual />
          </div>
        </div>
      </main>
    </div>
  );
};
