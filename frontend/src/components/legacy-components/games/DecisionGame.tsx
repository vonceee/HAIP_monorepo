import React, { useState } from "react";
import { DecisionScenario } from "../../../types";
import { AlertTriangle, ArrowRight, RefreshCw, Activity } from "lucide-react";

interface DecisionGameProps {
  scenarios: DecisionScenario[];
  topic: string;
}

export const DecisionGame: React.FC<DecisionGameProps> = ({
  scenarios,
  topic,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const currentScenario = scenarios[currentIndex];

  const getThemeColors = () => {
    switch (topic) {
      case "Earthquake":
        return {
          accent: "text-orange-400",
          border: "border-orange-500",
          bg: "bg-orange-500",
          glow: "shadow-orange-500/20",
        };
      case "Flood":
        return {
          accent: "text-cyan-400",
          border: "border-cyan-500",
          bg: "bg-cyan-500",
          glow: "shadow-cyan-500/20",
        };
      case "Volcano":
        return {
          accent: "text-red-400",
          border: "border-red-500",
          bg: "bg-red-500",
          glow: "shadow-red-500/20",
        };
      default:
        return {
          accent: "text-emerald-400",
          border: "border-emerald-500",
          bg: "bg-emerald-500",
          glow: "shadow-emerald-500/20",
        };
    }
  };

  const theme = getThemeColors();

  const handleOptionClick = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
    if (currentScenario.options[index].isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < scenarios.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResults(true);
    }
  };

  const resetGame = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setShowResults(false);
  };

  if (showResults) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center p-4 md:p-8 animate-in fade-in duration-500">
        <div className="w-full max-w-2xl flex flex-col items-center p-6 md:p-10 bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl text-center shadow-2xl">
          <Activity
            className={`w-12 h-12 md:w-16 md:h-16 ${theme.accent} mb-4 md:mb-6`}
          />
          <h2 className="text-2xl md:text-5xl font-black text-white uppercase mb-2 md:mb-4">
            Simulation Complete
          </h2>
          <p className="text-slate-300 text-lg md:text-xl mb-6 md:mb-8">
            You made the right call in{" "}
            <span className={`font-bold ${theme.accent} text-xl md:text-2xl`}>
              {score}
            </span>{" "}
            out of {scenarios.length} scenarios.
          </p>
          <button
            onClick={resetGame}
            className={`w-full md:w-auto px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold uppercase tracking-widest text-white transition-all shadow-lg hover:scale-105 flex items-center justify-center ${theme.bg} hover:brightness-110 text-sm md:text-base`}
          >
            <RefreshCw className="w-4 h-4 md:w-5 md:h-5 mr-2" /> Restart
            Decision Game
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-start md:justify-center max-w-6xl mx-auto overflow-y-auto custom-scrollbar p-4 md:p-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] md:[&::-webkit-scrollbar]:block md:[scrollbar-width:auto]">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 pb-8 md:pb-0">
        {/* Left Col: Scenario Description */}
        <div className="flex flex-col justify-start md:justify-center space-y-4 md:space-y-6">
          <div
            className={`inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-black/40 backdrop-blur-md w-fit ${theme.accent} font-mono text-xs uppercase tracking-widest`}
          >
            <AlertTriangle className="w-3 h-3 md:w-4 md:h-4 mr-2" />
            Scenario {currentIndex + 1} of {scenarios.length}
          </div>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-white leading-tight drop-shadow-lg">
            {currentScenario.title}
          </h2>

          <div className="p-4 md:p-6 bg-white/5 border-l-4 border-white/20 rounded-r-2xl backdrop-blur-sm">
            <p className="text-base md:text-xl text-slate-200 leading-relaxed font-medium">
              {currentScenario.scenario}
            </p>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden mt-2 md:mt-4">
            <div
              className={`h-full ${theme.bg} transition-all duration-500`}
              style={{
                width: `${((currentIndex + 1) / scenarios.length) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* Right Col: Options & Feedback */}
        <div className="flex flex-col gap-3 md:gap-4 justify-start md:justify-center">
          {!isAnswered ? (
            <div className="space-y-3 md:space-y-4 animate-in slide-in-from-right-8 fade-in duration-500">
              <p className="text-slate-400 text-xs md:text-sm font-bold uppercase tracking-wider mb-1 md:mb-2">
                Select your course of action:
              </p>
              {currentScenario.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOptionClick(idx)}
                  className={`w-full text-left p-4 md:p-6 rounded-xl md:rounded-2xl border-2 transition-all duration-300 group relative overflow-hidden bg-black/40 border-white/10 hover:border-white/40 hover:bg-white/5 active:scale-[0.98]`}
                >
                  <div className="flex items-center justify-between relative z-10">
                    <span className="text-base md:text-lg text-slate-100 font-bold group-hover:text-white pr-4">
                      {option.label}
                    </span>
                    <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors flex-shrink-0" />
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="space-y-4 md:space-y-6 animate-in zoom-in-95 fade-in duration-300">
              {/* Selected Choice Status */}
              <div
                className={`p-4 md:p-6 rounded-xl md:rounded-2xl border-2 flex items-start gap-3 md:gap-4 ${
                  currentScenario.options[selectedOption!].isCorrect
                    ? "bg-emerald-950/40 border-emerald-500/50"
                    : "bg-red-950/40 border-red-500/50"
                }`}
              >
                <div>
                  <h3
                    className={`text-lg md:text-xl font-black uppercase mb-1 md:mb-2 ${
                      currentScenario.options[selectedOption!].isCorrect
                        ? "text-emerald-400"
                        : "text-red-400"
                    }`}
                  >
                    {currentScenario.options[selectedOption!].isCorrect
                      ? "Excellent Decision"
                      : "Critical Error"}
                  </h3>
                  <p className="text-slate-200 text-base md:text-lg leading-relaxed">
                    {currentScenario.options[selectedOption!].feedback}
                  </p>
                </div>
              </div>

              {/* Show correct answer if wrong */}
              {!currentScenario.options[selectedOption!].isCorrect && (
                <div className="p-3 md:p-4 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-xs md:text-sm text-slate-400 uppercase font-bold mb-1">
                    Correct Protocol:
                  </p>
                  <p className="text-slate-200 text-sm md:text-base">
                    {currentScenario.options.find((o) => o.isCorrect)?.label}
                  </p>
                </div>
              )}

              <button
                onClick={handleNext}
                className={`w-full py-3 md:py-4 rounded-xl font-bold uppercase tracking-widest text-white shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98] text-sm md:text-base ${
                  currentScenario.options[selectedOption!].isCorrect
                    ? "bg-emerald-600 hover:bg-emerald-500"
                    : "bg-slate-700 hover:bg-slate-600"
                }`}
              >
                {currentIndex < scenarios.length - 1
                  ? "Next Scenario"
                  : "Finish Simulation"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
