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
      <div className="flex flex-col min-h-full justify-start md:justify-center py-8 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black uppercase text-white tracking-tighter leading-[0.9] drop-shadow-xl mb-8">
          Effect Analysis
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-4 items-stretch lg:h-[65vh]">
          {content.cards &&
            content.cards.map((card, index) => {
              const CardIcon = iconMap[card.icon] || Zap;
              return (
                <div
                  key={index}
                  className={`group relative bg-black border-2 border-white/10 rounded-3xl overflow-hidden ${card.borderColor} transition-all duration-500 hover:-translate-y-2 ${card.shadowColor} flex flex-col justify-end min-h-[55vh] md:min-h-[45vh]`}
                >
                  {/* Full Background Image */}
                  <div className="absolute inset-0 w-full h-full">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-60"
                    />
                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90" />
                  </div>

                  {/* Icon Badge */}
                  <div className="absolute top-6 right-6 z-10 bg-black/40 backdrop-blur-md p-3 rounded-2xl border border-white/10 shadow-lg group-hover:bg-black/60 transition-colors">
                    <CardIcon className={`w-8 h-8 ${card.iconColor}`} />
                  </div>

                  {/* Content Overlay */}
                  <div className="relative z-10 p-6 md:p-8 flex flex-col gap-4">
                    <h4
                      className={`text-2xl md:text-3xl lg:text-4xl font-black text-white uppercase tracking-wide leading-[0.9] ${card.textColor} drop-shadow-lg`}
                    >
                      {card.title.split(" ").map((word, i) => (
                        <React.Fragment key={i}>
                          {word}
                          <br />
                        </React.Fragment>
                      ))}
                    </h4>
                    <p className="text-slate-200 text-sm md:text-lg leading-relaxed font-medium drop-shadow-md max-w-[90%]">
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
