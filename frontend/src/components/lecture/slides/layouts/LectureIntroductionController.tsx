import React from "react";
import { Lecture } from "../../../../types";
import {
  LectureIntroductionView,
  LectureIntroductionContent,
} from "./LectureIntroductionView";

interface LectureIntroductionControllerProps {
  lecture: Lecture;
}

export const LectureIntroductionController: React.FC<
  LectureIntroductionControllerProps
> = ({ lecture }) => {
  const introSection = lecture.sections.find((s) => s.id === "intro");

  const defaultContent: LectureIntroductionContent = {
    subTitle: " - Topic Overview",
    secondaryInfo: "No detailed briefing available for this topic.",
    reference: "N/A",
    stats: [],
  };

  const content: LectureIntroductionContent =
    introSection?.layoutData || defaultContent;

  return (
    <LectureIntroductionView
      topic={lecture.topic}
      imageUrl={lecture.imageUrl}
      content={content}
    />
  );
};
