import React from "react";
import { Lecture } from "../../../../types";
import { LectureHazardDetailController } from "./LectureHazardDetailController";

interface LectureHazardDetailProps {
  lecture: Lecture;
  title: string;
}

export const LectureHazardDetail: React.FC<LectureHazardDetailProps> = ({
  lecture,
  title,
}) => {
  return <LectureHazardDetailController lecture={lecture} title={title} />;
};
