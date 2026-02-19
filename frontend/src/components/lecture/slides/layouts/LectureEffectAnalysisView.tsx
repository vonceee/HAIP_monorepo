import React from "react";
import {
  Home,
  Zap,
  HeartPulse,
  Skull,
  Coins,
  Flame,
  Mountain,
  Users,
  Waves,
  LucideIcon,
} from "lucide-react";

// Define the shape of the data content for one card
export interface EffectAnalysisCardData {
  title: string;
  description: string;
  highlight: string;
  icon: string; // Icon name as string
  image: string;
  color: string;
  borderColor: string;
  shadowColor: string;
  iconColor: string;
  textColor: string;
  highlightColor: string;
}

// Define the shape of the entire layout data
export interface LectureEffectAnalysisContent {
  cards: EffectAnalysisCardData[];
}

interface LectureEffectAnalysisViewProps {
  content: LectureEffectAnalysisContent;
}

// Icon mapping helper
const iconMap: Record<string, LucideIcon> = {
  Home,
  Zap,
  HeartPulse,
  Skull,
  Coins,
  Flame,
  Mountain,
  Users,
  Waves,
};

export const LectureEffectAnalysisView: React.FC<
  LectureEffectAnalysisViewProps
> = ({ content }) => {
  return (
    <div className="w-full h-full overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
      <div className="flex flex-col min-h-full justify-start md:justify-center py-8 md:py-12 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black uppercase text-white tracking-tighter leading-[0.9] drop-shadow-xl mb-8">
          Effect Analysis
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 items-stretch lg:h-[40vh]">
          {content.cards &&
            content.cards.map((card, index) => {
              const CardIcon = iconMap[card.icon] || Zap;
              return (
                <div
                  key={index}
                  className={`group relative bg-black/40 border-2 border-white/10 rounded-3xl overflow-hidden ${card.borderColor} transition-all duration-500 hover:-translate-y-2 ${card.shadowColor} flex flex-col`}
                >
                  {/* Image Format matching Features.tsx */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Icon Badge */}
                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md p-2 rounded-xl border border-white/10 shadow-lg">
                      <CardIcon className={`w-6 h-6 ${card.iconColor}`} />
                    </div>
                  </div>

                  <div className="p-6 flex flex-col gap-3">
                    <h4
                      className={`text-xl md:text-2xl font-black text-white uppercase tracking-wide leading-none ${card.textColor}`}
                    >
                      {card.title.split(" ").map((word, i) => (
                        <React.Fragment key={i}>
                          {word}
                          <br />
                        </React.Fragment>
                      ))}
                    </h4>
                    <p className="text-slate-300 text-sm md:text-base leading-relaxed font-medium">
                      {card.description
                        .split(card.highlight)
                        .map((part, i, arr) => (
                          <React.Fragment key={i}>
                            {part}
                            {i < arr.length - 1 && (
                              <span
                                className={`${card.highlightColor} font-bold`}
                              >
                                {card.highlight}
                              </span>
                            )}
                          </React.Fragment>
                        ))}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
