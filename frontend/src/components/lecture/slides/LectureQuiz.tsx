import React from "react";
import { QuizComponent } from "../../legacy-components/QuizComponent";

interface LectureQuizProps {
  questions: any[];
}

export const LectureQuiz: React.FC<LectureQuizProps> = ({ questions }) => {
  return <QuizComponent questions={questions} />;
};
