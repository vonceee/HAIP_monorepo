import React, { useState, useEffect, useRef, useMemo } from "react";
import { Lecture, SectionLayout } from "../../types";
import { LectureTopBar } from "./layout/LectureTopBar";
import { THEME_STYLES } from "./theme";
import { X } from "lucide-react";

import { ImageWithLoader } from "../legacy-components/ImageWithLoader";
import { LectureStartMenu } from "./LectureStartMenu";
import { LearningCompetenciesController } from "./learning-competencies/LearningCompetenciesController";
import { LearningObjectivesController } from "./learning-objectives/LearningObjectivesController";
import { LectureContent } from "./slides/LectureContent";
import { LectureDecision } from "./slides/LectureDecision";
import { LectureQuiz } from "./slides/LectureQuiz";
import { LectureComplete } from "./slides/LectureComplete";
import { LectureIntroduction } from "./slides/layouts/LectureIntroduction";
import { LectureEffectAnalysis } from "./slides/layouts/LectureEffectAnalysis";
import { LectureHazardDetail } from "./slides/layouts/LectureHazardDetail";
import { LectureControls } from "./layout/LectureControls";
import { LearningSimulationsController } from "./learning-simulations/LearningSimulationsController";

interface LectureViewProps {
  lecture: Lecture;
  onBack: () => void;
}

interface Slide {
  type: SectionLayout;
  title: string;
  data?: any;
}

export const LectureView: React.FC<LectureViewProps> = ({
  lecture,
  onBack,
}) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [showStartMenu, setShowStartMenu] = useState(true);
  const [showCompetencies, setShowCompetencies] = useState(false);
  const [showObjectives, setShowObjectives] = useState(false);
  const [showSimulation, setShowSimulation] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const contentScrollRef = useRef<HTMLDivElement>(null);

  // Construct Virtual Slides Array
  const slides = useMemo(() => {
    const s: Slide[] = [];

    // Map sections from the lecture data
    if (lecture.sections && lecture.sections.length > 0) {
      lecture.sections.forEach((section) => {
        if (section.layout === "complete") return; // Skip complete section here, added at end

        s.push({
          type: section.layout || "standard", // Fallback to "standard" if layout is not defined
          title: section.title,
          data: section, // Pass the whole section object which has layoutData
        });
      });
    }

    // Insert Decision Game Slide appends to the end if exists (or we can make it a section in data.ts)
    // Keeping backward compatibility for now if it's separate in types
    if (lecture.decisionGame && lecture.decisionGame.length > 0) {
      s.push({
        type: "decision-game",
        title: "Hazard Simulation",
        data: lecture.decisionGame,
      });
    }

    // Insert Final Quiz Slide
    if (lecture.finalQuiz && lecture.finalQuiz.length > 0) {
      s.push({
        type: "final-quiz",
        title: "Test Your Knowledge",
        data: lecture.finalQuiz,
      });
    }

    // Insert Lecture Complete Slide at the very end
    s.push({
      type: "complete",
      title: "Completion",
      data: {},
    });

    return s;
  }, [lecture]);

  useEffect(() => {
    setActiveSlideIndex(0);
    setShowStartMenu(true);
  }, [lecture.id]);

  useEffect(() => {
    if (contentScrollRef.current) {
      contentScrollRef.current.scrollTop = 0;
    }
  }, [activeSlideIndex]);

  // Force uniform theme for all lectures
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

  // --- MISSION BRIEFING SCREEN ---
  if (showStartMenu) {
    return (
      <LectureStartMenu
        lecture={lecture}
        onStart={() => {
          setShowStartMenu(false);
          setShowCompetencies(true);
          setShowObjectives(false);
          setShowSimulation(false);
        }}
        onBack={onBack}
      />
    );
  }

  // --- LEARNING COMPETENCIES SCREEN ---
  if (showCompetencies) {
    return (
      <div
        ref={containerRef}
        className={`h-screen supports-[height:100dvh]:h-[100dvh] w-full flex flex-col bg-gradient-to-br ${theme.bgGradient} text-white font-sans overflow-hidden relative`}
      >
        {/* Background Layers */}
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

        {/* TOP BAR - ALWAYS VISIBLE (Reused) */}
        <LectureTopBar
          topic={lecture.topic}
          onBack={() => {
            setShowCompetencies(false);
            setShowStartMenu(true);
          }}
          backLabel="Back"
          theme={theme}
        />

        <div className="flex-1 overflow-y-auto w-full relative z-10 custom-scrollbar">
          <LearningCompetenciesController
            lecture={lecture}
            onNext={() => {
              setShowCompetencies(false);
              setShowObjectives(true);
              setShowSimulation(false);
            }}
          />
        </div>
      </div>
    );
  }

  // --- LEARNING OBJECTIVES SCREEN ---
  if (showObjectives) {
    return (
      <div
        ref={containerRef}
        className={`h-screen supports-[height:100dvh]:h-[100dvh] w-full flex flex-col bg-gradient-to-br ${theme.bgGradient} text-white font-sans overflow-hidden relative`}
      >
        {/* Background Layers */}
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

        {/* TOP BAR - ALWAYS VISIBLE (Reused) */}
        <LectureTopBar
          topic={lecture.topic}
          onBack={() => {
            setShowObjectives(false);
            setShowCompetencies(true);
          }}
          backLabel="Back"
          theme={theme}
        />

        <div className="flex-1 overflow-y-auto w-full relative z-10 custom-scrollbar flex items-center justify-center p-4">
          <LearningObjectivesController
            lecture={lecture}
            onNext={() => {
              setShowObjectives(false);
              setShowSimulation(true);
              // Active slide index is already 0, so we just hide this overlay to show slides
            }}
            onBack={() => {
              setShowObjectives(false);
              setShowCompetencies(true);
            }}
          />
        </div>
      </div>
    );
  }

  // --- SIMULATION SCREEN ---
  if (showSimulation) {
    return (
      <div
        ref={containerRef}
        className={`h-screen supports-[height:100dvh]:h-[100dvh] w-full flex flex-col bg-gradient-to-br ${theme.bgGradient} text-white font-sans overflow-hidden relative`}
      >
        {/* Background Layers */}
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

        {/* TOP BAR - ALWAYS VISIBLE (Reused) */}
        <LectureTopBar
          topic={lecture.topic}
          onBack={() => {
            setShowSimulation(false);
            setShowObjectives(true);
          }}
          backLabel="Back"
          theme={theme}
        />

        <div className="flex-1 overflow-y-auto w-full relative z-10 custom-scrollbar flex flex-col items-center p-4">
          <LearningSimulationsController
            lecture={lecture}
            theme={theme}
            onNext={() => {
              setShowSimulation(false);
            }}
            onBack={() => {
              setShowSimulation(false);
              setShowObjectives(true);
            }}
          />
        </div>
      </div>
    );
  }

  // --- SLIDE BASED CONTENT VIEW ---
  return (
    <div
      ref={containerRef}
      className={`h-screen supports-[height:100dvh]:h-[100dvh] w-full flex flex-col bg-gradient-to-br ${theme.bgGradient} text-white font-sans overflow-hidden relative`}
    >
      {/* Background Layers (Persistent from Start Menu) */}
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

      {/* TOP BAR - ALWAYS VISIBLE */}
      <LectureTopBar
        topic={lecture.topic}
        onBack={onBack}
        backLabel="Exit Mission"
        theme={theme}
      />

      <div className="h-1 bg-white/5 w-full flex-none z-20 relative">
        <div
          className={`h-full ${theme.buttonBg} transition-all duration-300 shadow-[0_0_10px_currentColor]`}
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <div
        className="flex-1 overflow-y-auto lg:overflow-y-hidden w-full mx-auto p-4 sm:p-6 lg:p-8 custom-scrollbar px-8 lg:px-12 relative z-10"
        ref={contentScrollRef}
      >
        <div className="h-full">
          {activeSlide.type === "complete" ? (
            <LectureComplete lecture={lecture} theme={theme} onHome={onBack} />
          ) : activeSlide.type === "introduction" ? (
            <LectureIntroduction lecture={lecture} theme={theme} />
          ) : activeSlide.type === "effects-analysis" ? (
            <LectureEffectAnalysis lecture={lecture} theme={theme} />
          ) : activeSlide.type === "hazard-detail" ? (
            <LectureHazardDetail
              lecture={lecture}
              title={activeSlide.title}
              theme={theme}
            />
          ) : activeSlide.type === "decision-game" ? (
            <LectureDecision
              scenarios={activeSlide.data}
              topic={lecture.topic}
            />
          ) : activeSlide.type === "final-quiz" ? (
            <LectureQuiz questions={activeSlide.data} />
          ) : (
            <LectureContent
              currentStep={activeSlideIndex}
              totalSteps={slides.length}
              content={activeSlide.data.content}
              title={activeSlide.title}
              theme={theme}
              lecture={lecture}
              onImageClick={setPreviewImage}
            />
          )}
        </div>
      </div>

      <LectureControls
        currentStep={activeSlideIndex}
        totalSteps={slides.length}
        onNext={handleNext}
        onPrev={handlePrev}
        theme={theme}
        isFirstSlide={isFirstSlide}
        isLastSlide={isLastSlide}
      />
    </div>
  );
};
