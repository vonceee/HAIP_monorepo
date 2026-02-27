import React from "react";
import { Lecture } from "../../../../types";
import { LectureEffectAnalysisController } from "./LectureEffectAnalysisController";

interface LectureEffectAnalysisProps {
  lecture: Lecture;
}

export const LectureEffectAnalysis: React.FC<LectureEffectAnalysisProps> = ({
  lecture,
}) => {
  return <LectureEffectAnalysisController lecture={lecture} />;
};
