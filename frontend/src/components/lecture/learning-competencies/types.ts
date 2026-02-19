import { Competency } from "../../../types";

export interface LearningCompetenciesViewProps {
  competencies: Competency[];
  onNext: () => void;
}
