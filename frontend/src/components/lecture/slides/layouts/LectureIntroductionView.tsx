import React from "react";
import { THEME_STYLES } from "../../theme";
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
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

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

  return (
    <div className="relative w-full h-full overflow-hidden flex flex-col pointer-events-auto">
      <div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full h-full overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
        <div className="min-h-full p-6 md:p-12 flex flex-col justify-center max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:items-center">
            {/* Left Column: Heading & Key Info */}
            <div className="flex-1 space-y-6 w-full animate-in slide-in-from-left-10 duration-700 fade-in">
              <Badge
                variant="outline"
                className={`inline-flex items-center px-4 py-1.5 rounded-full border-white/20 bg-black/40 backdrop-blur-md ${theme.accentColor} font-mono text-xs md:text-sm tracking-widest uppercase mb-2 shadow-lg`}
              >
                <Info className="w-4 h-4 mr-2" />
                Briefing: {topic}
              </Badge>

              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-black uppercase text-white tracking-tighter leading-[0.9] drop-shadow-xl">
                  {topic}
                </h2>
                <p className="text-xl md:text-2xl font-light text-slate-200 leading-relaxed max-w-2xl">
                  <span className={`font-bold ${theme.accentColor}`}>
                    {topic}
                  </span>{" "}
                  {content.subTitle}
                </p>

                <div className="p-4 rounded-lg bg-black/30 border-l-4 border-white/30 backdrop-blur-sm">
                  <p className="text-slate-300 italic">
                    "{content.secondaryInfo}"
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Tactical Stats */}
            <div className="w-full lg:w-1/3 space-y-4 animate-in slide-in-from-right-10 duration-700 fade-in delay-200">
              <div className="grid gap-4">
                {content.stats &&
                  content.stats.map((stat, index) => {
                    const StatIcon = iconMap[stat.icon] || Info;
                    return (
                      <Card
                        key={index}
                        className="bg-black/40 border-white/10 backdrop-blur-md text-slate-200 overflow-hidden hover:bg-black/50 transition-colors group"
                      >
                        <CardContent className="p-4 flex items-start gap-4">
                          <div
                            className={`p-3 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors ${theme.accentColor}`}
                          >
                            <StatIcon className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="font-bold text-white uppercase text-sm tracking-wider mb-1">
                              {stat.label}
                            </h4>
                            <p className="text-sm text-slate-400 leading-snug">
                              {stat.description}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
              </div>

              {/* Reference Footer */}
              <div className="text-right pt-4 border-t border-white/10">
                <p className="text-xs font-mono uppercase tracking-widest">
                  REFERENCE: {content.reference}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
