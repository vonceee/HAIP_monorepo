import React, { useEffect } from "react";
import { BookOpen, ExternalLink } from "lucide-react";
import { THEME_STYLES } from "../../../theme";
import { earthquakeLecture } from "../../../../../data/lectures/earthquake";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "spline-viewer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & { url?: string; style?: React.CSSProperties };
    }
  }
}

const slides = [
  {
    id: 1,
    headline: earthquakeLecture.title,
    subheadline: "are among the most destructive natural hazards on earth",
    body: "their impacts go beyond ground shaking—they can trigger multiple secondary hazards that pose threats to human life, infrastructure, and the environment.",
    emphasis:
      "understanding these potential hazards is essential for developing predictive skills and effective disaster preparedness.",
    visual: "seismic-wave",
    reference: {
      label: "PHIVOLCS, 2023",
      url: "https://www.phivolcs.dost.gov.ph",
    },
  },
  {
    id: 2,
    headline: earthquakeLecture.title,
    subheadline: "",
    body: "earthquakes create a chain of destructive processes that affect people, the environment, and infrastructure, analyzing these effects helps communities predict secondary hazards, minimize casualties, and strengthen disaster resilience.",
    emphasis: "",
    visual: "seismic-wave",
    reference: {
      label: "PHIVOLCS, 2023",
      url: "https://www.phivolcs.dost.gov.ph",
    },
  },
];

function SeismicVisual() {
  useEffect(() => {
    const scriptUrl =
      "https://unpkg.com/@splinetool/viewer@1.12.61/build/spline-viewer.js";
    if (!document.querySelector(`script[src="${scriptUrl}"]`)) {
      const script = document.createElement("script");
      script.type = "module";
      script.src = scriptUrl;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className="relative w-full h-full min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(circle at center, black 40%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 40%, transparent 80%)",
        }}
      />

      <spline-viewer
        loading-anim-type="spinner-small-light"
        url="https://prod.spline.design/wwybbPRwxx0ec9gM/scene.splinecode"
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "transparent",
        }}
      ></spline-viewer>
    </div>
  );
}

export const EarthquakeIntro = ({
  slideIndex = 0,
}: {
  slideIndex?: number;
}) => {
  const slide = slides[slideIndex] || slides[0];
  const theme = THEME_STYLES.General;

  return (
    <div className="w-full h-full flex flex-col font-sans">
      {/* Main Content Split Area */}
      <main className="flex-1 flex flex-col lg:flex-row w-full overflow-hidden">
        {/* Left: Content panel */}
        <div className="flex-1 flex flex-col justify-start p-4 lg:border-r border-white/10 relative z-10 w-full">
          {/* Tag Bar */}
          <div className="w-full">
            <div className="flex items-center">
              <div
                className={`w-2 h-2 rounded-full ${theme.accentColor} animate-pulse`}
              />
            </div>
          </div>

          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter leading-[0.9] text-white drop-shadow-lg mb-4">
              {slide.headline}
            </h1>

            <h3
              className={`text-lg md:text-xl font-medium ${theme.accentColor} mb-8 tracking-wide`}
            >
              {slide.subheadline}
            </h3>

            <div className="w-16 h-1 bg-white/20 rounded-full mb-8" />

            <p className="text-lg text-slate-300 leading-relaxed font-light mb-8 text-pretty">
              {slide.body}
            </p>

            {/* Emphasis callout - Styled like the 'secondaryInfo' block */}
            <div className="p-5 rounded-xl bg-black/40 border-l-4 border-white/40 backdrop-blur-md mb-8 shadow-xl">
              <p className="text-slate-200 font-medium leading-relaxed">
                {slide.emphasis}
              </p>
            </div>

            {/* Reference */}
            {slide.reference && (
              <a
                href={slide.reference.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all font-mono text-xs text-slate-400 tracking-wider uppercase group"
              >
                <BookOpen
                  size={14}
                  className="group-hover:text-white transition-colors"
                />
                <span className="group-hover:text-white transition-colors">
                  {slide.reference.label}
                </span>
                <ExternalLink
                  size={12}
                  className="group-hover:text-white transition-colors"
                />
              </a>
            )}
          </div>
        </div>

        {/* Right: Visual Panel */}
        <div className="relative flex-1 flex flex-col items-center justify-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05)_0%,_transparent_100%)] pointer-events-none" />

          {/* Visual Content */}
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <SeismicVisual />
          </div>
        </div>
      </main>
    </div>
  );
};
