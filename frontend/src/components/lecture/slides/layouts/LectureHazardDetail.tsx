import React from "react";
import { Lecture } from "../../../../types";
import { LectureHazardDetailController } from "./LectureHazardDetailController";
import { THEME_STYLES } from "../../theme";

// Inferring ThemeColors type from the THEME_STYLES object values
type ThemeColors = (typeof THEME_STYLES)["General"];

interface LectureHazardDetailProps {
  lecture: Lecture;
  title: string;
  theme: ThemeColors;
}

export const LectureHazardDetail: React.FC<LectureHazardDetailProps> = ({
  lecture,
  title,
}) => {
  return <LectureHazardDetailController lecture={lecture} title={title} />;
};
