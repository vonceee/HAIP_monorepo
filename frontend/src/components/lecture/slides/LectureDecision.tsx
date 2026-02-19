import React from "react";
import { HazardTopic } from "../../../types";
import { DecisionGame } from "../../legacy-components/games/DecisionGame";

interface LectureDecisionProps {
  scenarios: any[];
  topic: HazardTopic;
}

export const LectureDecision: React.FC<LectureDecisionProps> = ({
  scenarios,
  topic,
}) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start max-w-6xl mx-auto pb-20 pt-10 overflow-y-auto custom-scrollbar">
      <DecisionGame scenarios={scenarios} topic={topic} />
    </div>
  );
};
