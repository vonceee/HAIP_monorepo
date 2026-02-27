import React, { useState, useEffect, useCallback } from "react";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

// Types
export interface HazardFeature {
  title: string;
  description: string;
}

export interface HazardEffect {
  label: string;
  description: string;
}

export interface HazardProtocol {
  title: string;
  description: string;
  highlight: string;
}

export interface HazardImage {
  src: string;
  alt: string;
  caption: string;
  sourceUrl?: string;
}

export interface HazardDetailContent {
  title: string;
  description: string;
  features: HazardFeature[];
  effects: HazardEffect[];
  protocol: HazardProtocol;
  images: HazardImage[];
}

interface LectureHazardDetailViewProps {
  content: HazardDetailContent;
}

export const LectureHazardDetailView: React.FC<
  LectureHazardDetailViewProps
> = ({ content }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();
  }, [emblaApi]);

  if (!content) return null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start pt-10 pb-10 lg:pb-0 relative">
      {/* Vertical Divider for Large Screens */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden lg:block pointer-events-none" />

      {/* Left Column: Info & Features */}
      <div className="flex flex-col gap-6 lg:overflow-y-auto custom-scrollbar lg:pr-4 py-2">
        <div>
          <h2 className="text-4xl md:text-6xl font-black uppercase text-white tracking-tighter leading-[0.9] drop-shadow-xl mb-4">
            {content.title}
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed lowercase">
            {content.description}
          </p>
        </div>

        <div
          className={`bg-white/5 border-l-4 border-primary p-3 rounded-r-3xl hover:bg-white/10 transition-colors duration-300 shadow-md`}
        >
          <h4
            className={`text-lg font-bold text-primary mb-3 uppercase tracking-wide flex items-center`}
          >
            <div
              className={`w-3 h-3 bg-primary rounded-sm mr-3 animate-spin`}
            />
            Effects Analysis
          </h4>
          <ul className="space-y-3 text-slate-200 text-base">
            {content.effects.map((effect, idx) => (
              <li
                key={idx}
                className="flex items-start p-1 rounded-lg hover:bg-white/5 transition-all duration-300 hover:translate-x-2 cursor-default"
              >
                <span className="text-red-500 mr-3 mt-1 font-bold">►</span>
                <span>
                  <strong>{effect.label}:</strong> {effect.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Column: Images Carousel */}
      <div className="lg:overflow-y-hidden rounded-3xl bg-black/20 border border-white/5 relative min-h-[400px] flex flex-col justify-center py-8">
        <div
          className="overflow-hidden w-full h-full flex flex-col justify-center"
          ref={emblaRef}
        >
          <div className="flex w-full touch-pan-y items-center">
            {content.images.map((img, idx) => {
              const isActive = idx === selectedIndex;
              return (
                <div
                  key={idx}
                  className={`flex-[0_0_85%] min-w-0 md:flex-[0_0_75%] lg:flex-[0_0_80%] px-2 md:px-4 transition-all duration-500 ease-out
                    ${isActive ? "scale-100 opacity-100" : "scale-[0.85] opacity-40 brightness-75"}
                  `}
                >
                  <div
                    className={`bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative
                        ${isActive ? "hover:border-primary/50" : ""}
                      `}
                  >
                    <div className="aspect-[4/3] overflow-hidden relative group/image bg-black/50 flex items-center justify-center">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-cover transform group-hover/image:scale-105 transition-transform duration-700 zoomable-image cursor-zoom-in"
                      />
                      {img.sourceUrl && (
                        <a
                          href={img.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute top-3 right-3 bg-white/90 text-black p-2.5 rounded-full opacity-0 group-hover/image:opacity-100 transition-all z-20 hover:scale-110 shadow-xl border border-transparent hover:border-primary"
                          title="View Source"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                    {isActive && (
                      <div className="p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent absolute bottom-0 left-0 right-0 pointer-events-none">
                        <p className="text-sm md:text-base text-slate-100 font-medium text-center drop-shadow-md pb-4 lowercase">
                          {img.caption}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="absolute top-1/2 -translate-y-1/2 left-2 md:left-4 z-10">
          <button
            onClick={scrollPrev}
            className="p-2 md:p-3 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10 hover:border-white/30 transition-all hover:scale-105"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-2 md:right-4 z-10">
          <button
            onClick={scrollNext}
            className="p-2 md:p-3 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10 hover:border-white/30 transition-all hover:scale-105"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
          {content.images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => emblaApi?.scrollTo(idx)}
              className={`h-1.5 md:h-2 rounded-full transition-all duration-300 ${
                idx === selectedIndex
                  ? `bg-current w-6 md:w-8 text-primary`
                  : "bg-white/30 hover:bg-white/50 w-2 md:w-2.5"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
