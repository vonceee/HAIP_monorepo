import React, { useMemo } from "react";
import { LearningObjectivesView } from "./LearningObjectivesView";
import { LectureObjectivesModel } from "./types";
import { Lecture } from "../../../types";

interface LearningObjectivesControllerProps {
  lecture: Lecture;
  onNext?: () => void;
  onBack?: () => void;
}

export const LearningObjectivesController: React.FC<
  LearningObjectivesControllerProps
> = ({ lecture, onNext, onBack }) => {
  const data = useMemo<LectureObjectivesModel>(() => {
    return {
      topic: lecture.topic,
      title: "Learning Objectives",
      objectives:
        lecture.objectives?.map((desc, index) => ({
          id: `obj-${index}`,
          description: desc,
        })) || [],
    };
  }, [lecture]);

  return <LearningObjectivesView data={data} onNext={onNext} onBack={onBack} />;
};
