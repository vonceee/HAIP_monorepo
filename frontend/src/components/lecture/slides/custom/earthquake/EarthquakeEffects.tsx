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

export interface EarthquakeEffectCardData {
  title: string;
  description: string;
  highlight: string;
  icon: string;
  image: string;
}

export interface EarthquakeEffectsContent {
  cards: EarthquakeEffectCardData[];
}

interface EarthquakeEffectsProps {
  content: EarthquakeEffectsContent;
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

function HighlightedText({
  text,
  highlight,
}: {
  text: string;
  highlight: string;
}) {
  if (!highlight) return <>{text}</>;
  const parts = text.split(highlight);
  return (
    <>
      {parts.map((part, i, arr) => (
        <React.Fragment key={i}>
          {part}
          {i < arr.length - 1 && (
            <span className="text-primary font-bold">{highlight}</span>
          )}
        </React.Fragment>
      ))}
    </>
  );
}

function EffectCard({
  card,
  index,
}: {
  card: EarthquakeEffectCardData;
  index: number;
}) {
  const CardIcon = iconMap[card.icon] || Zap;

  return (
    <div className="group relative w-full h-64 sm:h-[280px] lg:h-[35vh] xl:h-[40vh] perspective-[1000px] cursor-pointer">
      <div className="w-full h-full relative transition-all duration-700 transform-style-3d group-hover:rotate-y-180">
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-black border border-white/10">
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-full object-cover opacity-80"
            loading={index === 0 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Card Title */}
          <div className="absolute bottom-6 left-6 right-6 z-10">
            <h4
              className="font-black text-white uppercase tracking-wide leading-tight drop-shadow-xl
                            text-lg sm:text-lg lg:text-xl"
            >
              {card.title}
            </h4>
          </div>

          <div
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10
                           bg-black/40 backdrop-blur-md
                           p-3 sm:p-4 rounded-2xl
                           border border-white/10"
          >
            <CardIcon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
          </div>
        </div>

        {/* BACK FACE (Text Content) */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_0_40px_hsl(var(--primary)/0.2)] bg-black/90 border border-primary/40 flex flex-col justify-center items-center text-center p-6 sm:p-8 lg:p-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />

          <div
            className="mb-4 sm:mb-6
                           bg-primary/20 backdrop-blur-md
                           p-3 sm:p-4 rounded-2xl
                           border border-primary/30 text-primary"
          >
            <CardIcon className="w-6 h-6 sm:w-8 sm:h-8" />
          </div>

          <h4
            className="font-black text-white uppercase tracking-wide leading-tight drop-shadow-md
                          text-xl sm:text-2xl lg:text-3xl mb-3 sm:mb-4 text-primary"
          >
            {card.title}
          </h4>
          <p
            className="text-slate-300 leading-relaxed font-light drop-shadow-sm lowercase
                          text-sm sm:text-base lg:text-lg"
          >
            <HighlightedText
              text={card.description}
              highlight={card.highlight}
            />
          </p>
        </div>
      </div>
    </div>
  );
}

export const EarthquakeEffects: React.FC<EarthquakeEffectsProps> = ({
  content,
}) => {
  const cards = content?.cards ?? [];

  return (
    <section className="w-full h-full flex flex-col justify-center pb-8">
      <div className="flex flex-col px-4 sm:px-6 lg:px-12 w-full max-w-screen-2xl mx-auto">
        {/* Heading */}
        <div className="mb-6 lg:mb-10 flex flex-col items-center text-center">
          <h2
            className="font-black uppercase text-white tracking-tighter drop-shadow-xl
                          text-4xl lg:text-5xl xl:text-6xl"
          >
            Effect Analysis
          </h2>
        </div>

        {/* Card grid - Hardcoded to 3 columns since data is static */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 w-full">
          {cards.map((card, index) => (
            <EffectCard key={index} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
