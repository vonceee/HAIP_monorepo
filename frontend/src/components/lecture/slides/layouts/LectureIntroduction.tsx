import React from "react";
import { Lecture } from "../../../../types";
import { LectureIntroductionController } from "./LectureIntroductionController";

interface LectureIntroductionProps {
  lecture: Lecture;
}

export const LectureIntroduction: React.FC<LectureIntroductionProps> = ({
  lecture,
}) => {
  return <LectureIntroductionController lecture={lecture} />;
};
