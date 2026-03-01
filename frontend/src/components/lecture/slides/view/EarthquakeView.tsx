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

// Individual Earthquake slides
import { EarthquakeIntro } from "../custom/earthquake/EarthquakeIntro";
import { EarthquakeEffects } from "../custom/earthquake/EarthquakeEffects";
import { EarthquakeHazardDetail } from "../custom/earthquake/EarthquakeHazardDetail";
import GroundShakingSlide from "../custom/earthquake/EarthquakeGroundShaking";

import pBXuXnF from "../../../../assets/earthquake/effect-analysis/pBXuXnF.jpeg";
import P2c24Fz from "../../../../assets/earthquake/effect-analysis/P2c24Fz.jpeg";
import nieyw10 from "../../../../assets/earthquake/effect-analysis/nieyw10.jpeg";

import XkdS1Sh from "../../../../assets/earthquake/liquefaction/XkdS1Sh.jpeg";
import ejDazPW from "../../../../assets/earthquake/liquefaction/ejDazPW.jpeg";
import l1_2lNocmC from "../../../../assets/earthquake/landslides/2lNocmC.jpeg";
import l2_cU3ltee from "../../../../assets/earthquake/landslides/cU3ltee.jpeg";
import t1_Vs1VkOm_d from "../../../../assets/earthquake/tsunami/Vs1VkOm_d.jpeg";
import t2_iaUMeRz from "../../../../assets/earthquake/tsunami/iaUMeRz.jpeg";
import i1_7udUQp3 from "../../../../assets/earthquake/fire-infra/7udUQp3.jpeg";
import i2_MRcTqhO from "../../../../assets/earthquake/fire-infra/MRcTqhO.jpeg";
import gr1 from "../../../../assets/earthquake/ground-rupture/mz2zqMV.jpeg";
import gr2 from "../../../../assets/earthquake/ground-rupture/nSEuU4D.jpeg";
import gr3 from "../../../../assets/earthquake/ground-rupture/wsdvsdVD.jpg";

interface EarthquakeViewProps {
  lecture: Lecture; // We still pass lecture for the overarching menu metadata
  onBack: () => void;
}

export const EarthquakeView: React.FC<EarthquakeViewProps> = ({
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
        component: <EarthquakeIntro slideIndex={0} />,
      },
      {
        id: "intro-2",
        component: <EarthquakeIntro slideIndex={1} />,
      },
      {
        id: "ground-shaking-custom",
        component: <GroundShakingSlide />,
      },
      {
        id: "effects",
        component: (
          <EarthquakeEffects
            content={{
              cards: [
                {
                  title: "Structural Damage",
                  description:
                    "Weakly designed buildings collapse, especially on soft soils.",
                  highlight: "soft soils",
                  icon: "Home",
                  image: pBXuXnF,
                },
                {
                  title: "Infrastructure Disruption",
                  description:
                    "Roads crack and utilities fail, cutting off critical networks.",
                  highlight: "critical networks",
                  icon: "Zap",
                  image: P2c24Fz,
                },
                {
                  title: "Psychological Stress",
                  description:
                    "Fear and trauma affect survivors long after the event.",
                  highlight: "long after",
                  icon: "HeartPulse",
                  image: nieyw10,
                },
              ],
            }}
          />
        ),
      },
      {
        id: "ground-rupture",
        component: (
          <EarthquakeHazardDetail
            content={{
              title: "Ground Rupture",
              description:
                "The visible tearing or displacement of the ground surface along an active fault during an earthquake.",
              effects: [
                {
                  label: "Direct Structural Damage",
                  description:
                    "Buildings, bridges, and pipelines crossing fault lines are torn apart.",
                },
                {
                  label: "Land Use Impact",
                  description:
                    "Fault zones become uninhabitable, limiting urban expansion and zoning.",
                },
                {
                  label: "Economic Consequences",
                  description:
                    "Relocation and reconstruction costs increase drastically.",
                },
              ],
              images: [
                {
                  src: gr1,
                  alt: "Bohol Rupture",
                  caption: "ground rupture in Bohol after the 2013 earthquake.",
                  sourceUrl:
                    "https://afe-adb.org/sites/default/files/Earthquake%20Risk%20and%20Preparedness%20Presentation%20ADB%2028May2013.pdf",
                },
                {
                  src: gr2,
                  alt: "Cotabato Rupture",
                  caption:
                    "ground rupture in North Cotabato after the 2019 earthquake.",
                  sourceUrl: "https://www.youtube.com/watch?v=tSeflXdLrJE",
                },
                {
                  src: gr3,
                  alt: "Cotabato Rupture",
                  caption:
                    "a rock wall in the village of Anonang, Inabanga, Bohol",
                  sourceUrl:
                    "https://phys.org/news/2013-10-philippine-earthquake-miles-long-rocky-wall.html",
                },
              ],
            }}
          />
        ),
      },
      {
        id: "liquefaction",
        component: (
          <EarthquakeHazardDetail
            content={{
              title: "Liquefaction",
              description:
                "The process where water-saturated, loose soil behaves like a liquid during intense shaking.",
              effects: [
                {
                  label: "Building Instability",
                  description:
                    "Houses, bridges, and towers sink, tilt, or collapse.",
                },
                {
                  label: "Underground Damage",
                  description:
                    "Bursting of pipelines and sewage systems due to soil movement.",
                },
                {
                  label: "Economic Disruption",
                  description:
                    "Industrial zones built on reclaimed or soft land experience high recovery costs.",
                },
              ],
              images: [
                {
                  src: XkdS1Sh,
                  alt: "Liquefaction Damage",
                  caption: "Ground failure caused by liquefaction.",
                },
                {
                  src: ejDazPW,
                  alt: "Tilted Building",
                  caption:
                    "Buildings tilting due to loss of soil bearing capacity.",
                },
              ],
            }}
          />
        ),
      },
      {
        id: "landslides",
        component: (
          <EarthquakeHazardDetail
            content={{
              title: "Landslides",
              description:
                "Downhill movement of rocks and soil triggered by ground shaking, especially in mountainous or steep terrains.",
              effects: [
                {
                  label: "Burial of Settlements",
                  description:
                    "Entire villages can be buried, as seen in upland communities of Luzon.",
                },
                {
                  label: "Isolation of Areas",
                  description:
                    "Blocked roads hinder rescue and relief operations.",
                },
                {
                  label: "Environmental Damage",
                  description:
                    "Landslides destroy vegetation, leading to erosion and loss of biodiversity.",
                },
              ],
              images: [
                {
                  src: l1_2lNocmC,
                  alt: "Landslide",
                  caption: "Massive landslide triggered by seismic activity.",
                },
                {
                  src: l2_cU3ltee,
                  alt: "Road Blockage",
                  caption: "Road blocked by landslide debris.",
                },
              ],
            }}
          />
        ),
      },
      {
        id: "tsunami",
        component: (
          <EarthquakeHazardDetail
            content={{
              title: "Tsunami",
              description:
                "A series of large sea waves generated by undersea earthquakes that displace huge volumes of water.",
              effects: [
                {
                  label: "Coastal Inundation",
                  description:
                    "Flooding destroys homes, ports, and coastal infrastructure.",
                },
                {
                  label: "Loss of Lives",
                  description:
                    "People near the shorelines have little time to evacuate.",
                },
                {
                  label: "Environmental Impact",
                  description:
                    "Saltwater contamination damages crops and freshwater sources.",
                },
              ],
              images: [
                {
                  src: t1_Vs1VkOm_d,
                  alt: "Tsunami Wave",
                  caption: "Approaching tsunami wave.",
                },
                {
                  src: t2_iaUMeRz,
                  alt: "Tsunami Damage",
                  caption: "Aftermath of a tsunami inundation.",
                },
              ],
            }}
          />
        ),
      },
      {
        id: "infra-failure",
        component: (
          <EarthquakeHazardDetail
            content={{
              title: "Infrastructure Failures",
              description:
                "Secondary hazards caused by damaged gas lines, power systems, and industrial facilities during or after earthquakes.",
              effects: [
                {
                  label: "Urban Fires",
                  description:
                    "Breakouts spread rapidly when water lines are broken.",
                },
                {
                  label: "Pollution",
                  description:
                    "Chemical leaks from factories contaminate the air and soil.",
                },
                {
                  label: "Extended Recovery",
                  description:
                    " Fire-damaged areas require longer rebuilding periods.",
                },
              ],
              images: [
                {
                  src: i1_7udUQp3,
                  alt: "Fire",
                  caption: "Fire breaking out after an earthquake.",
                },
                {
                  src: i2_MRcTqhO,
                  alt: "Infrastructure Damage",
                  caption: "Damaged infrastructure posing safety risks.",
                },
              ],
            }}
          />
        ),
      },
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
        className={`flex-1 overflow-y-auto w-full relative z-10 custom-scrollbar ${scrollClassName ?? ""}`}
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
      className={`bg-yellow-500 h-screen supports-[height:100dvh]:h-[100dvh] w-full flex flex-col bg-gradient-to-br ${theme.bgGradient} text-white font-sans overflow-hidden relative`}
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
