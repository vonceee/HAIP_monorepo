import React, { useState } from "react";
import { QuizQuestion } from "../../types";
import {
  CheckCircle,
  XCircle,
  CheckSquare,
  ChevronRight,
  ChevronLeft,
  Award,
} from "lucide-react";

interface QuizProps {
  questions: QuizQuestion[];
}

export const QuizComponent: React.FC<QuizProps> = ({ questions }) => {
  const [formAnswers, setFormAnswers] = useState<Record<string, number>>({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formScore, setFormScore] = useState(0);
  const [showResultsScreen, setShowResultsScreen] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleFormSelect = (questionId: string, optionIndex: number) => {
    if (formSubmitted) return;
    setFormAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex,
    }));
  };

  const submitFormQuiz = () => {
    let calculatedScore = 0;
    questions.forEach((q) => {
      if (formAnswers[q.id] === q.correctAnswer) {
        calculatedScore++;
      }
    });
    setFormScore(calculatedScore);
    setFormSubmitted(true);
    setShowResultsScreen(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const isFirstQuestion = currentQuestionIndex === 0;

  // --- RENDER FORM MODE ---
  if (showResultsScreen) {
    return (
      <div className="w-full h-full mx-auto flex flex-col justify-center animate-in slide-in-from-bottom-8 fade-in duration-700 pb-16">
        <div className="text-center relative">
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-sm font-bold tracking-[0.2em] text-slate-400 uppercase mb-2 mt-8">
              Final Score
            </h2>
            <div className="text-7xl md:text-9xl font-black text-white mb-12 tracking-tighter drop-shadow-lg">
              {formScore}
              <span className="text-4xl md:text-5xl text-white/40 font-light mx-2">
                /
              </span>
              <span className="text-5xl md:text-7xl text-white/80">
                {questions.length}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <button
                onClick={() => setShowResultsScreen(false)}
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold uppercase tracking-wide transition-all bg-white/10 hover:bg-white/20 text-white border border-white/10 shadow-lg flex items-center justify-center text-sm"
              >
                Review Answers
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full mx-auto flex flex-col p-4">
      {/* Scrollable Question Content */}
      <div className="flex-1 flex flex-col justify-center min-h-0 overflow-y-auto custom-scrollbar px-2">
        {currentQuestion && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300">
            {/* ProgressIndicator */}
            <div className="flex items-center justify-between">
              <span className="font-sans text-sm tracking-widest uppercase font-bold pb-2">
                Question {currentQuestionIndex + 1} of {questions.length}
              </span>
              <div className="flex gap-1.5">
                {questions.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === currentQuestionIndex
                        ? "w-6 bg-emerald-500"
                        : i < currentQuestionIndex ||
                            formAnswers[questions[i].id] !== undefined
                          ? "w-2 bg-emerald-500/50"
                          : "w-2 bg-white/10"
                    }`}
                  />
                ))}
              </div>
            </div>

            {(() => {
              const selectedOpt = formAnswers[currentQuestion.id];
              return (
                <div className={`transition-all duration-300`}>
                  <div className="flex items-start mb-6 mx-auto h-[4.5rem]">
                    <h3 className="text-lg md:text-xl leading-relaxed lowercase">
                      {currentQuestion.question}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 md:gap-4 lg:gap-5 mt-4 mx-auto">
                    {currentQuestion.options.map((opt, optIdx) => {
                      const isSelected = selectedOpt === optIdx;
                      const isAnswerKey =
                        formSubmitted &&
                        currentQuestion.correctAnswer === optIdx;

                      let optionClass =
                        "w-full text-left p-4 md:p-5 lg:p-6 rounded-xl border transition-all flex items-center justify-between group shadow-sm min-h-[80px]";

                      if (formSubmitted) {
                        if (isAnswerKey) {
                          optionClass +=
                            "bg-emerald-500/20 border-emerald-500/50 text-emerald-100";
                        } else if (isSelected && !isAnswerKey) {
                          optionClass +=
                            "bg-red-500/20 border-red-500/50 text-red-100";
                        } else {
                          optionClass +=
                            "bg-black/20 border-white/5 text-slate-500 opacity-60";
                        }
                      } else {
                        if (isSelected) {
                          optionClass +=
                            "bg-emerald-600/20 border-emerald-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.3)] scale-[1.01]";
                        } else {
                          optionClass +=
                            "bg-black/20 border-white/5 text-slate-300 hover:bg-white/5 hover:border-white/20";
                        }
                      }

                      return (
                        <button
                          key={optIdx}
                          onClick={() =>
                            handleFormSelect(currentQuestion.id, optIdx)
                          }
                          disabled={formSubmitted}
                          className={optionClass}
                        >
                          <div className="flex items-center">
                            <div
                              className={`w-5 h-5 rounded-full border-2 mr-4 flex items-center justify-center flex-shrink-0 transition-colors ${
                                isSelected || isAnswerKey
                                  ? formSubmitted && isAnswerKey
                                    ? "border-emerald-400 bg-emerald-400"
                                    : formSubmitted && !isAnswerKey
                                      ? "border-red-400 bg-red-400"
                                      : "border-emerald-500 bg-emerald-500"
                                  : "border-slate-500 group-hover:border-slate-400"
                              }`}
                            >
                              {(isSelected || isAnswerKey) && (
                                <div className="w-2 h-2 bg-white rounded-full" />
                              )}
                            </div>
                            <span
                              className={`text-base md:text-lg lowercase ${isSelected && !formSubmitted ? "font-medium" : ""}`}
                            >
                              {opt}
                            </span>
                          </div>

                          {formSubmitted && isAnswerKey && (
                            <CheckCircle className="w-6 h-6 text-emerald-400 ml-4 flex-shrink-0" />
                          )}
                          {formSubmitted && isSelected && !isAnswerKey && (
                            <XCircle className="w-6 h-6 text-red-400 ml-4 flex-shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })()}
          </div>
        )}
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10 flex-shrink-0">
        <button
          onClick={handlePrev}
          disabled={isFirstQuestion}
          className={`px-5 py-3 rounded-xl font-bold uppercase tracking-wide flex items-center transition-all ${
            isFirstQuestion
              ? "text-slate-600 cursor-not-allowed opacity-50"
              : "text-slate-300 hover:bg-white/10 hover:text-white"
          }`}
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          Previous
        </button>

        {!isLastQuestion ? (
          <button
            onClick={handleNext}
            className="px-8 py-3 font-bold uppercase tracking-wide transition-all flex items-center"
          >
            Next
            <ChevronRight className="w-5 h-5 ml-2" />
          </button>
        ) : (
          !formSubmitted && (
            <button
              onClick={submitFormQuiz}
              disabled={Object.keys(formAnswers).length < questions.length}
              className={`px-8 py-3 rounded-xl font-bold uppercase tracking-widest transition-all shadow-xl flex items-center ${
                Object.keys(formAnswers).length < questions.length
                  ? "bg-slate-800 text-slate-500 cursor-not-allowed"
                  : "bg-emerald-600 hover:bg-emerald-500 text-white hover:shadow-emerald-500/20 hover:scale-[1.02]"
              }`}
            >
              <CheckSquare className="w-5 h-5 mr-2 -ml-1" />
              Submit
            </button>
          )
        )}

        {formSubmitted && isLastQuestion && (
          <button
            onClick={() => setShowResultsScreen(true)}
            className="px-8 py-3 font-bold uppercase flex items-center hover:scale-[1.02]"
          >
            <Award className="w-5 h-5 mr-2 -ml-1" />
            View Score
          </button>
        )}
      </div>
    </div>
  );
};
