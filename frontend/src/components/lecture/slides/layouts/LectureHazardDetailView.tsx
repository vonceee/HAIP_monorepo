import React from "react";
import { THEME_STYLES } from "../../theme";
import { ExternalLink } from "lucide-react";

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
  const theme = THEME_STYLES.General;

  if (!content) return null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start h-auto lg:h-full relative pb-10 lg:pb-0">
      {/* Vertical Divider for Large Screens */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden lg:block"></div>

      {/* Left Column: Info & Features */}
      <div className="flex flex-col justify-start h-full py-2 overflow-y-auto custom-scrollbar pr-2">
        <div className="space-y-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-black uppercase text-white tracking-tighter leading-[0.9] drop-shadow-xl mb-4">
              {content.title}
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed">
              {content.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {content.features.map((feature, idx) => (
              <div
                key={idx}
                className={`bg-white/5 p-4 rounded-2xl border-2 border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] group cursor-pointer hover:border-${theme.accentColor}/50`}
              >
                <div
                  className={`${theme.accentColor} font-bold text-lg uppercase mb-2 group-hover:text-white transition-colors`}
                >
                  {feature.title}
                </div>
                <div className="text-slate-300 text-sm leading-snug group-hover:text-white">
                  {feature.description}
                </div>
              </div>
            ))}
          </div>

          <div
            className={`bg-white/5 border-l-4 ${theme.buttonBg.replace(
              "bg-",
              "border-",
            )} p-3 rounded-r-3xl hover:bg-white/10 transition-colors duration-300 shadow-md`}
          >
            <h4
              className={`text-lg font-bold ${theme.accentColor} mb-3 uppercase tracking-wide flex items-center`}
            >
              <div
                className={`w-3 h-3 ${theme.buttonBg} rounded-sm mr-3 animate-spin`}
              />
              Effects Analysis
            </h4>
            <ul className="space-y-3 text-slate-200 text-base">
              {content.effects.map((effect, idx) => (
                <li
                  key={idx}
                  className={`flex items-start p-1 rounded-lg hover:bg-white/5 transition-all duration-300 hover:translate-x-2 cursor-default`}
                >
                  <span className="text-red-500 mr-3 mt-1 font-bold">►</span>
                  <span>
                    <strong>{effect.label}:</strong> {effect.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-orange-950/40 border border-orange-500/30 p-5 rounded-2xl flex items-start mt-auto hover:bg-orange-900/40 transition-colors duration-500 group hover:shadow-lg hover:shadow-orange-900/50">
            <div>
              <h4 className="text-orange-300 font-bold uppercase text-base mb-1 group-hover:text-white tracking-wide">
                {content.protocol.title}
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-200">
                {content.protocol.description
                  .split(content.protocol.highlight)
                  .map((part, i, arr) => (
                    <React.Fragment key={i}>
                      {part}
                      {i < arr.length - 1 && (
                        <span className="text-white font-bold bg-orange-600 px-2 py-0.5 rounded shadow-sm">
                          {content.protocol.highlight}
                        </span>
                      )}
                    </React.Fragment>
                  ))}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Images Scroll */}
      <div className="h-auto lg:h-[80vh] relative overflow-hidden rounded-3xl bg-black/20 border border-white/5 group/scroller overflow-y-auto custom-scrollbar">
        <div className="space-y-6 px-4 py-6">
          {content.images.map((img, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors group/image cursor-pointer relative shadow-lg hover:border-orange-500/30"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700 zoomable-image cursor-zoom-in"
                />
                {img.sourceUrl && (
                  <a
                    href={img.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-2 right-2 bg-white text-black p-3 rounded-full opacity-0 group-hover/image:opacity-100 transition-all z-20 hover:scale-110 hover:rotate-12 shadow-xl border-2 border-orange-500"
                    title="View Source"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </a>
                )}
              </div>
              <div className="p-4">
                <p className="text-base text-slate-200 font-bold mb-1">
                  {img.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
