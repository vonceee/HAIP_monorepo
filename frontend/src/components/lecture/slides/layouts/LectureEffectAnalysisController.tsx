import React from "react";
import { Lecture } from "../../../../types";
import {
  LectureEffectAnalysisView,
  LectureEffectAnalysisContent,
} from "./LectureEffectAnalysisView";

interface LectureEffectAnalysisControllerProps {
  lecture: Lecture;
}

export const LectureEffectAnalysisController: React.FC<
  LectureEffectAnalysisControllerProps
> = ({ lecture }) => {
  // Find the 'effects' section to get the layoutData
  const effectsSection = lecture.sections.find((s) => s.id === "effects");

  // Default content if data is missing (fallback safety)
  const defaultContent: LectureEffectAnalysisContent = {
    cards: [],
  };

  const content: LectureEffectAnalysisContent =
    effectsSection?.layoutData || defaultContent;

  return <LectureEffectAnalysisView content={content} />;
};
