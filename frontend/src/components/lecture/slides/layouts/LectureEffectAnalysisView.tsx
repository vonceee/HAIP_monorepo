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

export interface EffectAnalysisCardData {
  title: string;
  description: string;
  highlight: string;
  icon: string; // icon name as string
  image: string;
}

export interface LectureEffectAnalysisContent {
  cards: EffectAnalysisCardData[];
}

interface LectureEffectAnalysisViewProps {
  content: LectureEffectAnalysisContent;
}

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
    <div className="w-full h-full">
      <div className="flex flex-col py-8 px-4 mx-auto">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-3xl xl:text-4xl 2xl:text-5xl font-black uppercase text-white tracking-tighter mb-8">
            Effect Analysis
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch xl:h-[55vh] 2xl:h-[60vh]">
          {content.cards &&
            content.cards.map((card, index) => {
              const CardIcon = iconMap[card.icon] || Zap;
              return (
                <div
                  key={index}
                  className={`group relative bg-black border-2 border-white/10 rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_50px_hsl(var(--primary)/0.4)] flex flex-col justify-end min-h-[55vh] md:min-h-[45vh]`}
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

                  <div className="absolute top-6 right-6 z-10 bg-black/40 backdrop-blur-md p-3 rounded-2xl border border-white/10 shadow-lg group-hover:bg-black/60 transition-colors">
                    <CardIcon
                      className={`w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors`}
                    />
                  </div>

                  {/* Content Overlay */}
                  <div className="relative z-10 p-6 md:p-8 flex flex-col gap-4">
                    <h4
                      className={`text-2xl md:text-3xl 2xl:text-4xl font-black text-white uppercase tracking-wide leading-[0.9] group-hover:text-primary-foreground drop-shadow-lg transition-colors`}
                    >
                      {card.title.split(" ").map((word, i) => (
                        <React.Fragment key={i}>
                          {word}
                          <br />
                        </React.Fragment>
                      ))}
                    </h4>
                    <p className="text-slate-200 text-sm md:text-lg leading-relaxed font-medium drop-shadow-md max-w-[90%] lowercase">
                      {card.description
                        .split(card.highlight)
                        .map((part, i, arr) => (
                          <React.Fragment key={i}>
                            {part}
                            {i < arr.length - 1 && (
                              <span className={`text-primary font-bold`}>
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
