import React from "react";
import { Lecture } from "../../../types";
import { LearningCompetenciesView } from "./LearningCompetenciesView";

interface LearningCompetenciesControllerProps {
  lecture: Lecture;
  onNext: () => void;
}

export const LearningCompetenciesController: React.FC<
  LearningCompetenciesControllerProps
> = ({ lecture, onNext }) => {
  const competencies = lecture.competencies || [];

  return (
    <LearningCompetenciesView competencies={competencies} onNext={onNext} />
  );
};
