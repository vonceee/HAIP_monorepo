import { Lecture } from "../../../types";

export interface ThemeColors {
  bgGradient: string;
  accentColor: string;
  buttonBg: string;
  buttonHover: string;
  glow: string;
}

export interface LearningSimulationsProps {
  lecture: Lecture;
  theme: ThemeColors;
  onNext?: () => void;
  onBack?: () => void;
}

export interface LearningSimulationsViewProps extends LearningSimulationsProps {
  isGameFullscreen: boolean;
  onToggleFullscreen: (fullscreen: boolean) => void;
}
