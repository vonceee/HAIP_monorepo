import React, { useState } from "react";
import { LearningSimulationsProps } from "./types";
import { LearningSimulationsView } from "./LearningSimulationsView";

export const LearningSimulationsController: React.FC<
  LearningSimulationsProps
> = (props) => {
  const [isGameFullscreen, setIsGameFullscreen] = useState(false);

  return (
    <LearningSimulationsView
      {...props}
      isGameFullscreen={isGameFullscreen}
      onToggleFullscreen={setIsGameFullscreen}
    />
  );
};
