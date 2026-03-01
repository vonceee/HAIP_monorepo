import React from "react";
import { Lecture } from "../../../types";
import { LearningCompetenciesView } from "./LearningCompetenciesView";

interface LearningCompetenciesControllerProps {
  lecture: Lecture;
}

export const LearningCompetenciesController: React.FC<
  LearningCompetenciesControllerProps
> = ({ lecture }) => {
  return <LearningCompetenciesView lecture={lecture} />;
};
