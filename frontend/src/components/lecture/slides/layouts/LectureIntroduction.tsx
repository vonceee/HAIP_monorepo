import React from "react";
import { Lecture } from "../../../../types";
import { LectureIntroductionController } from "./LectureIntroductionController";
import { THEME_STYLES } from "../../theme";

// Inferring ThemeColors type from the THEME_STYLES object values
type ThemeColors = (typeof THEME_STYLES)["General"];

interface LectureIntroductionProps {
  lecture: Lecture;
  theme: ThemeColors;
}

export const LectureIntroduction: React.FC<LectureIntroductionProps> = ({
  lecture,
}) => {
  return <LectureIntroductionController lecture={lecture} />;
};
