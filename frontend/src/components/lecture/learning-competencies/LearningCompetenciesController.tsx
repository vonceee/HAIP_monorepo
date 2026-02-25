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
  return <LearningCompetenciesView lecture={lecture} onNext={onNext} />;
};
