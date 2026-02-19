import React from "react";
import { QuizComponent } from "../../legacy-components/QuizComponent";

interface LectureQuizProps {
  questions: any[];
}

export const LectureQuiz: React.FC<LectureQuizProps> = ({ questions }) => {
  return (
    <div className="w-full lg:h-full h-auto flex flex-col items-center justify-start max-w-5xl mx-auto overflow-y-auto custom-scrollbar pb-20 lg:pb-0">
      <div className="w-full">
        <QuizComponent questions={questions} title="Test Your Knowledge" />
      </div>
    </div>
  );
};
