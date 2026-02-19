import React, { useEffect, useState } from "react";
import { Gamepad2, X, ChevronLeft, ArrowRight } from "lucide-react";
import { EarthquakeGame } from "../../legacy-components/games/EarthquakeGame";
import { FloodGame } from "../../legacy-components/games/FloodGame";
import { VolcanoGame } from "../../legacy-components/games/VolcanoGame";
import { LearningSimulationsViewProps } from "./types";
import { Button } from "@/components/ui/button";

export const LearningSimulationsView: React.FC<
  LearningSimulationsViewProps
> = ({
  lecture,
  theme,
  isGameFullscreen,
  onToggleFullscreen,
  onNext,
  onBack,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsVisible(true), 100);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <div
        className={`w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16 items-center lg:items-stretch justify-center flex-1 min-h-[calc(100vh-120px)] lg:min-h-0 p-1 lg:p-0 transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {/* Left Column: Header & Context */}
        <div className="flex-1 w-full lg:max-w-xl space-y-6 flex flex-col justify-center lg:h-full lg:py-12">
          <div className="space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center justify-center lg:justify-start">
              <div
                className={`p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-xl`}
              >
                <Gamepad2 className={`w-8 h-8 ${theme.accentColor}`} />
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none drop-shadow-2xl text-white">
                Interactive Simulation
              </h2>
              <p className="text-slate-300 text-base md:text-xl font-light mt-4 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Apply your knowledge in this simulated scenario. Complete the
                task to proceed to the next mission objective.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Game Card & Actions */}
        <div className="w-full lg:flex-1 flex flex-col gap-6 lg:max-w-2xl">
          {/* Game Card */}
          <div className="bg-black/40 border border-white/10 rounded-3xl p-2 sm:p-3 backdrop-blur-xl relative overflow-hidden flex flex-col shadow-2xl flex-1 group">
            {/* Accent Line */}
            <div
              className={`absolute top-0 left-0 w-full h-1 ${theme.buttonBg} opacity-80`}
            />

            <div className="aspect-video w-full rounded-2xl overflow-hidden relative bg-black/50 h-full shadow-inner ring-1 ring-white/5">
              {lecture.gameType === "earthquake-sim" && (
                <EarthquakeGame onPlayClick={() => onToggleFullscreen(true)} />
              )}
              {lecture.gameType === "flood-sim" && (
                <FloodGame onPlayClick={() => onToggleFullscreen(true)} />
              )}
              {lecture.gameType === "volcanic-eruption-sim" && (
                <VolcanoGame onPlayClick={() => onToggleFullscreen(true)} />
              )}
              {lecture.gameType === "none" && (
                <div className="flex items-center justify-center h-full text-slate-400 text-sm italic p-8 text-center">
                  No simulation required for this protocol.
                </div>
              )}
            </div>
          </div>

          {/* Action Footer */}
          <div className="sticky bottom-0 p-4 -mx-4 lg:mx-0 z-20 border-t border-white/10">
            <div className="flex items-center justify-between gap-4">
              {/* Back Button */}
              <div>
                {onBack && (
                  <Button
                    variant="ghost"
                    onClick={onBack}
                    className="text-slate-400 hover:text-white hover:bg-white/5 uppercase tracking-wider text-xs md:text-sm"
                  >
                    <ChevronLeft className="mr-2 w-4 h-4" /> Back
                  </Button>
                )}
              </div>

              <Button
                onClick={onNext}
                size="lg"
                className={`flex-1 shadow-lg hover:shadow-cyan-500/20 transition-all font-black text-lg h-14 uppercase tracking-widest ${theme.buttonBg} ${theme.buttonHover} text-white border-0 ring-0 rounded-xl`}
              >
                Next <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Game Modal */}
      {isGameFullscreen && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[999] flex flex-col items-center justify-center p-4 animate-in fade-in duration-300">
          {/* Close Button */}
          <button
            onClick={() => onToggleFullscreen(false)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all hover:scale-110 shadow-xl border border-white/20 z-50"
            title="Close simulation"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Game Content with Iframes */}
          <div className="w-full h-full max-w-6xl flex flex-col items-center justify-center">
            {lecture.gameType === "earthquake-sim" && (
              <iframe
                src="https://seismic-classroom-3d-earthquake-simulator-626730958040.us-west1.run.app"
                className="w-full h-full border-0 rounded-lg shadow-2xl"
                title="3D Earthquake Simulator"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; xr-spatial-tracking"
                allowFullScreen
                loading="lazy"
              />
            )}
            {lecture.gameType === "flood-sim" && (
              <iframe
                src="https://storm-surge-classroom-flood-simulator-626730958040.us-west1.run.app"
                className="w-full h-full border-0 rounded-lg shadow-2xl"
                title="Storm Surge Simulator"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; xr-spatial-tracking"
                allowFullScreen
                loading="lazy"
              />
            )}
            {lecture.gameType === "volcanic-eruption-sim" && (
              <iframe
                src="https://magmacore-volcanic-eruption-simulator-626730958040.us-west1.run.app"
                className="w-full h-full border-0 rounded-lg shadow-2xl"
                title="Volcanic Eruption Simulator"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; xr-spatial-tracking"
                allowFullScreen
                loading="lazy"
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};
