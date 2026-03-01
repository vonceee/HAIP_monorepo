import React, { useState, useEffect, useRef, useMemo } from "react";
import { Lecture } from "../../../../types";
import { LectureTopBar } from "../../layout/LectureTopBar";
import { THEME_STYLES } from "../../theme";
import { X } from "lucide-react";

import { ImageWithLoader } from "../../../legacy-components/ImageWithLoader";
import { LectureStartMenu } from "../../LectureStartMenu";
import { LearningCompetenciesController } from "../../learning-competencies/LearningCompetenciesController";
import { LectureQuiz } from "../LectureQuiz";
import { LectureComplete } from "../LectureComplete";
import { LectureControls } from "../../layout/LectureControls";
import { LearningSimulationsController } from "../../learning-simulations/LearningSimulationsController";
import { VolcanoIntro } from "../custom/volcano/VolcanoIntro";

import { LectureEffectAnalysis } from "../layouts/LectureEffectAnalysis";
import { VolcanoHazardDetail } from "../custom/volcano/VolcanoHazardDetail";

interface VolcanoViewProps {
  lecture: Lecture; // We pass lecture for the overarching menu metadata
  onBack: () => void;
}

export const VolcanoView: React.FC<VolcanoViewProps> = ({
  lecture,
  onBack,
}) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [showStartMenu, setShowStartMenu] = useState(true);
  const [showSimulation, setShowSimulation] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const contentScrollRef = useRef<HTMLDivElement>(null);

  const slides = useMemo(() => {
    return [
      {
        id: "competencies",
        component: <LearningCompetenciesController lecture={lecture} />,
      },
      {
        id: "intro-1",
        component: (
          <VolcanoIntro
            topic="Volcano"
            content={{
              subTitle:
                "are powerful natural systems that can both create landforms and cause large-scale destruction.",
              secondaryInfo:
                "when magma, gas, and ash escape from deep within the Earth, the surrounding environment and communities may experience severe hazards.",
              reference: "PHIVOLCS, 2023",
            }}
          />
        ),
      },
      {
        id: "intro-2",
        component: (
          <VolcanoIntro
            topic="Volcano"
            content={{
              subTitle: "",
              secondaryInfo:
                "Recognizing these hazards—and the early signs of an impending eruption—is critical for forecasting, evacuation planning, and saving lives. “Volcanic eruptions cannot be stopped, but their impacts can be reduced through awareness and preparedness.”",
              reference: "PHIVOLCS, 2023",
            }}
          />
        ),
      },
      ...lecture.sections
        .filter((s) => s.id !== "intro")
        .map((section) => {
          if (section.layout === "effects-analysis") {
            return {
              id: section.id,
              component: <LectureEffectAnalysis lecture={lecture} />,
            };
          }
          if (section.layout === "hazard-detail") {
            return {
              id: section.id,
              component: (
                <VolcanoHazardDetail content={section.layoutData as any} />
              ),
            };
          }

          // Fallback for custom or basic HTML slides
          return {
            id: section.id,
            component: section.customComponent || (
              <div className="p-12 text-center text-white/50">
                Fallback View
              </div>
            ),
          };
        }),
      {
        id: "final-quiz",
        component: <LectureQuiz questions={lecture.finalQuiz || []} />,
      },
      {
        id: "complete",
        component: <LectureComplete />,
      },
    ];
  }, [lecture, onBack]);

  useEffect(() => {
    setActiveSlideIndex(0);
    setShowStartMenu(true);
  }, [lecture.id]);

  useEffect(() => {
    // When slide changes, scroll the content to top
    if (contentScrollRef.current) {
      contentScrollRef.current.scrollTop = 0;
    }
  }, [activeSlideIndex]);

  const theme = THEME_STYLES.General;
  const activeSlide = slides[activeSlideIndex];
  const isFirstSlide = activeSlideIndex === 0;
  const isLastSlide = activeSlideIndex === slides.length - 1;
  const progressPercent = ((activeSlideIndex + 1) / slides.length) * 100;

  const handleNext = () => {
    if (!isLastSlide) {
      setActiveSlideIndex((prev) => prev + 1);
    } else {
      onBack();
    }
  };

  const handlePrev = () => {
    if (!isFirstSlide) {
      setActiveSlideIndex((prev) => prev - 1);
    }
  };

  const BackgroundLayers = () => (
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <ImageWithLoader
          src={lecture.imageUrl}
          alt="Background"
          containerClassName="w-full h-full"
          className="w-full h-full object-cover filter blur-sm scale-110 animate-pulse"
          style={{ animationDuration: "10s" }}
        />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)] pointer-events-none" />
    </div>
  );

  const ScreenShell = ({
    children,
    onBack: handleBack,
    backLabel = "Back",
    scrollClassName,
  }: {
    children: React.ReactNode;
    onBack: () => void;
    backLabel?: string;
    scrollClassName?: string;
  }) => (
    <div
      ref={containerRef}
      className={`h-screen supports-[height:100dvh]:h-[100dvh] w-full flex flex-col bg-gradient-to-br ${theme.bgGradient} text-white font-sans overflow-hidden relative`}
    >
      <BackgroundLayers />
      <LectureTopBar
        topic={lecture.topic}
        onBack={handleBack}
        backLabel={backLabel}
        theme={theme}
      />
      <div
        className={`flex-1 overflow-y-auto w-full relative z-10 custom-scrollbar ${
          scrollClassName ?? ""
        }`}
      >
        {children}
      </div>
    </div>
  );

  // --- MISSION BRIEFING SCREEN ---
  if (showStartMenu) {
    return (
      <LectureStartMenu
        lecture={lecture}
        onStart={() => {
          setShowStartMenu(false);
          setShowSimulation(false);
        }}
        onBack={onBack}
      />
    );
  }

  // --- SIMULATION SCREEN ---
  if (showSimulation) {
    return (
      <ScreenShell
        onBack={() => {
          setShowSimulation(false);
        }}
      >
        <LearningSimulationsController
          lecture={lecture}
          theme={theme}
          onNext={() => {
            setShowSimulation(false);
          }}
          onBack={() => {
            setShowSimulation(false);
          }}
        />
      </ScreenShell>
    );
  }

  // --- SLIDE BASED CONTENT VIEW ---
  return (
    <div
      ref={containerRef}
      className={`h-screen supports-[height:100dvh]:h-[100dvh] w-full flex flex-col bg-gradient-to-br ${theme.bgGradient} text-white font-sans overflow-hidden relative`}
    >
      {/* Background Layers */}
      <BackgroundLayers />

      {previewImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setPreviewImage(null)}
        >
          <button className="absolute top-4 right-4 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors text-white">
            <X className="w-8 h-8" />
          </button>
          <ImageWithLoader
            src={previewImage}
            alt="Preview"
            containerClassName="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl ring-1 ring-white/10"
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          />
        </div>
      )}

      {/* TOP BAR */}
      <LectureTopBar
        topic={lecture.topic}
        onBack={onBack}
        backLabel="Exit Mission"
        theme={theme}
      />

      {/* Progress Bar */}
      <div className="h-1 bg-white/5 w-full flex-none z-20 relative">
        <div
          className={`h-full ${theme.buttonBg} transition-all duration-300 shadow-[0_0_10px_currentColor]`}
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Main Content Area */}
      <div
        className="flex-1 overflow-y-auto lg:overflow-y-hidden h-full w-full custom-scrollbar relative bg-black/50 backdrop-blur-sm z-10"
        ref={contentScrollRef}
      >
        <div className="h-full">{activeSlide.component}</div>
      </div>

      <LectureControls
        currentStep={activeSlideIndex}
        totalSteps={slides.length}
        onNext={handleNext}
        onPrev={handlePrev}
        isFirstSlide={isFirstSlide}
        isLastSlide={isLastSlide}
      />
    </div>
  );
};
