import React from "react";
import { Lecture } from "../../../../types";
import { LectureEffectAnalysisController } from "./LectureEffectAnalysisController";
import { THEME_STYLES } from "../../theme";

// Inferring ThemeColors type from the THEME_STYLES object values
type ThemeColors = (typeof THEME_STYLES)["General"];

interface LectureEffectAnalysisProps {
  lecture: Lecture;
  theme: ThemeColors;
}

export const LectureEffectAnalysis: React.FC<LectureEffectAnalysisProps> = ({
  lecture,
}) => {
  return <LectureEffectAnalysisController lecture={lecture} />;
};
