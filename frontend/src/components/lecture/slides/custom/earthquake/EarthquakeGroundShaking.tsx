import { useState } from "react";
import {
  BookOpen,
  ExternalLink,
  Play,
  Activity,
  MapPin,
  Info,
} from "lucide-react";
import { THEME_STYLES } from "../../../theme";

function SeismicWaveVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden p-6 lg:p-12">
      <div className="w-full max-w-lg aspect-video bg-black/50 rounded-2xl border border-white/10 shadow-2xl flex flex-col items-center justify-center gap-4 group cursor-pointer hover:border-white/20 hover:bg-black/60 transition-all overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center border border-white/20 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
          <Play size={24} className="text-white ml-1" />
        </div>

        <div className="text-center relative z-10">
          <p className="text-sm font-bold text-white uppercase tracking-widest drop-shadow-md">
            Ground Shaking
          </p>
          <p className="text-xs text-slate-400 mt-2 font-mono">
            VIDEO PLACEHOLDER (02:15)
          </p>
        </div>
      </div>
    </div>
  );
}

function CaseStudyCard() {
  return (
    <div className="rounded-xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-sm shadow-xl mt-4">
      {/* Header */}
      <div className="flex items-center gap-3 px-5 py-3 border-b border-white/10 bg-white/5">
        <div className="w-7 h-7 rounded-md flex items-center justify-center shrink-0 bg-red-500/20 border border-red-500/30">
          <MapPin size={14} className="text-red-400" />
        </div>
        <div>
          <p className="text-sm font-bold text-white uppercase tracking-wider">
            Case Study
          </p>
          <p className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">
            Real-world Application
          </p>
        </div>
        <div className="ml-auto">
          <span className="text-xs px-2.5 py-1 rounded-md bg-red-500/20 text-red-400 font-mono font-bold">
            M 7.8
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="px-5 py-5">
        <h4 className="text-lg font-bold text-white mb-1">
          1990 Luzon Earthquake
        </h4>
        <p className="text-xs text-amber-500/80 mb-4 font-mono">
          July 16, 1990 · Baguio City, Philippines
        </p>
        <p className="text-sm leading-relaxed text-slate-300 mb-5">
          severe ground shaking caused the collapse of multiple hotels and
          schools in Baguio City.
        </p>

        {/* References */}
        <div className="flex items-center gap-4 pt-4 border-t border-white/10">
          {["PHIVOLCS, 2020", "USGS, 2021"].map((ref) => (
            <a
              key={ref}
              href="https://www.phivolcs.dost.gov.ph"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 transition-colors text-slate-400 hover:text-white font-mono text-[10px] uppercase tracking-wider"
            >
              <BookOpen size={12} />
              {ref}
              <ExternalLink size={10} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function GroundShakingSlide() {
  const [activeTab, setActiveTab] = useState("definition");
  const theme = THEME_STYLES.General;

  const tabs = [
    { id: "definition", label: "Definition", icon: Info },
    { id: "cause", label: "Cause", icon: Activity },
    { id: "example", label: "Case Study", icon: MapPin },
  ];

  return (
    <div className="w-full h-full flex flex-col font-sans text-white">
      {/* Main Content Split Area */}
      <main className="flex-1 flex flex-col lg:flex-row w-full overflow-hidden">
        {/* Left: Content panel */}
        <div className="flex-1 flex flex-col justify-start p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/10 relative z-10 w-full">
          <div>
            {/* Title */}
            <div className="mb-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[0.9] text-white drop-shadow-lg">
                Ground <span className={theme.accentColor}>Shaking</span>
              </h1>
            </div>

            {/* Tab nav */}
            <div className="flex gap-2 mb-8 border-b border-white/10 pb-px">
              {tabs.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`flex items-center gap-2 px-4 py-3 text-xs font-bold tracking-wider uppercase transition-all border-b-2 mb-[-1px] ${
                    activeTab === id
                      ? "text-white border-white bg-white/5 rounded-t-lg"
                      : "text-slate-400 border-transparent hover:text-slate-200 hover:bg-white/5 rounded-t-lg"
                  }`}
                >
                  <Icon size={14} />
                  {label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[200px]">
              {activeTab === "definition" && (
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <p className="text-xs text-amber-500/80 tracking-widest uppercase mb-4">
                    What is it?
                  </p>
                  <p className="text-xl text-slate-300 leading-relaxed font-light">
                    the{" "}
                    <span className="text-white font-medium">
                      vibration of the ground
                    </span>{" "}
                    caused by the sudden release of energy during an earthquake.
                  </p>
                </div>
              )}

              {activeTab === "cause" && (
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <p className="text-xs text-amber-500/80 font-mono tracking-widest uppercase mb-4">
                    How does it happen?
                  </p>
                  <p className="text-lg text-slate-300 leading-relaxed font-light">
                    <span className="text-white font-medium">
                      Seismic Waves
                    </span>{" "}
                    radiate outward from the focus and make structures move.
                  </p>
                </div>
              )}

              {activeTab === "example" && (
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <CaseStudyCard />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right: Visual Panel */}
        <div className="relative flex-1 flex flex-col items-center justify-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05)_0%,_transparent_100%)] pointer-events-none" />
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <SeismicWaveVisual />
          </div>
        </div>
      </main>
    </div>
  );
}
