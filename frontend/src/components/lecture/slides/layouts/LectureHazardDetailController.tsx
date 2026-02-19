import React from "react";
import { Lecture } from "../../../../types";
import {
  LectureHazardDetailView,
  HazardDetailContent,
} from "./LectureHazardDetailView";

interface LectureHazardDetailControllerProps {
  lecture: Lecture;
  title: string;
}

export const LectureHazardDetailController: React.FC<
  LectureHazardDetailControllerProps
> = ({ lecture, title }) => {
  // Find the section that matches the title
  // Note: specific sections like "Hazard Detail" should store their data in layoutData
  const section = lecture.sections.find((s) => s.title === title);

  const content: HazardDetailContent | null = section?.layoutData || null;

  if (!content) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-slate-400">No detailed data available for {title}</p>
      </div>
    );
  }

  return <LectureHazardDetailView content={content} />;
};
