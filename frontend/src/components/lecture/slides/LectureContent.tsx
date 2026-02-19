import React, { useRef, useEffect } from "react";
import { THEME_STYLES } from "../theme";
import { Lecture } from "../../../types";
import { LectureIntroduction } from "./layouts/LectureIntroduction";
import { LectureEffectAnalysis } from "./layouts/LectureEffectAnalysis";
import { LectureHazardDetail } from "./layouts/LectureHazardDetail";

// Inferring ThemeColors type from the THEME_STYLES object values
type ThemeColors = (typeof THEME_STYLES)["General"];

interface LectureContentProps {
  currentStep: number;
  totalSteps: number;
  content: string;
  title?: string;
  theme: ThemeColors;
  lecture: Lecture;
  onImageClick?: (src: string) => void;
}

export const LectureContent: React.FC<LectureContentProps> = ({
  currentStep,
  totalSteps,
  content,
  title,
  theme,
  lecture,
  onImageClick,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  // Helper to handle clicks on injected HTML content
  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (
      target.tagName === "IMG" &&
      target.classList.contains("zoomable-image")
    ) {
      const img = target as HTMLImageElement;
      if (onImageClick) {
        onImageClick(img.src);
      }
    }
  };

  // Handle injected content image loading animation
  useEffect(() => {
    const timer = setTimeout(() => {
      if (contentRef.current) {
        const images = contentRef.current.querySelectorAll("img");

        images.forEach((img) => {
          if (img.complete) return;

          img.style.opacity = "0";
          img.style.transition = "opacity 0.5s ease-in-out";

          const parent = img.parentElement;
          if (parent) {
            parent.classList.add("animate-pulse", "bg-white/10");
          }

          const handleLoad = () => {
            img.style.opacity = "1";
            if (parent) {
              parent.classList.remove("animate-pulse", "bg-white/10");
            }
          };

          img.addEventListener("load", handleLoad);
        });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [content]);

  // Use specialized layouts based on step or title
  if (currentStep === 0) {
    return <LectureIntroduction lecture={lecture} theme={theme} />;
  }

  // Check if title contains "Effect" (case insensitive) to trigger Effects Analysis layout
  if (title && /effect/i.test(title)) {
    return <LectureEffectAnalysis lecture={lecture} theme={theme} />;
  }

  // Check for specific detailed hazard layouts
  if (title && ["Ground Rupture"].includes(title)) {
    return (
      <LectureHazardDetail lecture={lecture} title={title} theme={theme} />
    );
  }

  return (
    <div className="flex flex-col lg:h-full h-auto">
      <div className="flex items-center space-x-3 opacity-60 mb-6 lg:mb-0">
        <div className={`w-2 h-2 rounded-full ${theme.buttonBg}`}></div>
        <span className="text-xs font-mono uppercase tracking-widest text-slate-300">
          Section {currentStep + 1} / {totalSteps}
        </span>
      </div>

      <div
        ref={contentRef}
        onClick={handleContentClick}
        className="prose prose-invert prose-xl md:prose-2xl max-w-none w-full lg:flex-1"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};
