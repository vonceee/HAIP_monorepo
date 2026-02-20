import React, { useState } from "react";
import { QuizQuestion } from "../../types";
import {
  CheckCircle,
  XCircle,
  RefreshCw,
  CheckSquare,
  AlertCircle,
} from "lucide-react";

interface QuizProps {
  questions: QuizQuestion[];
  title?: string;
}

export const QuizComponent: React.FC<QuizProps> = ({
  questions,
  title = "Evaluation",
}) => {
  // Form Mode State
  const [formAnswers, setFormAnswers] = useState<Record<string, number>>({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formScore, setFormScore] = useState(0);

  // --- FORM MODE HANDLERS ---
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
    // scroll to top to see score
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resetFormQuiz = () => {
    setFormAnswers({});
    setFormSubmitted(false);
    setFormScore(0);
  };

  // --- RENDER FORM MODE (Google Forms Style) ---
  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <div className="bg-black/40 border border-white/10 p-8 rounded-3xl text-center shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
        <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-2">
          {title}
        </h2>
        <p className="text-slate-400 mb-6">
          Answer all questions below to verify your understanding of the
          protocol.
        </p>

        {formSubmitted && (
          <div className="animate-in fade-in slide-in-from-top-4 duration-500 bg-emerald-900/30 border border-emerald-500/50 p-6 rounded-2xl mb-4">
            <div className="text-emerald-400 font-bold uppercase tracking-widest text-xs mb-1">
              Assessment Complete
            </div>
            <div className="text-4xl font-black text-white mb-2">
              {formScore}{" "}
              <span className="text-2xl text-emerald-400/60">
                / {questions.length}
              </span>
            </div>
            <p className="text-slate-300">
              {formScore === questions.length
                ? "Perfect Score! You are mission ready."
                : "Review the correct answers below."}
            </p>
            <button
              onClick={resetFormQuiz}
              className="mt-6 inline-flex items-center px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors text-sm font-bold uppercase tracking-wide border border-white/10"
            >
              <RefreshCw className="w-4 h-4 mr-2" /> Retake Test
            </button>
          </div>
        )}
      </div>

      <div className="space-y-6">
        {questions.map((q, index) => {
          const selectedOpt = formAnswers[q.id];
          const isCorrect = formSubmitted && selectedOpt === q.correctAnswer;
          const isWrong =
            formSubmitted &&
            selectedOpt !== undefined &&
            selectedOpt !== q.correctAnswer;

          let cardBorderClass = "border-white/10";
          if (formSubmitted) {
            if (isCorrect)
              cardBorderClass =
                "border-emerald-500/50 ring-1 ring-emerald-500/20";
            else if (isWrong)
              cardBorderClass = "border-red-500/50 ring-1 ring-red-500/20";
          } else if (selectedOpt !== undefined) {
            cardBorderClass = "border-blue-500/50";
          }

          return (
            <div
              key={q.id}
              className={`bg-white/5 p-6 md:p-8 rounded-2xl border ${cardBorderClass} transition-all duration-300 backdrop-blur-sm hover:bg-white/10`}
            >
              <div className="flex items-start mb-6">
                <span className="bg-white/10 text-slate-300 text-xs font-mono px-2 py-1 rounded mr-4 mt-1 flex-shrink-0">
                  Q{index + 1}
                </span>
                <h3 className="text-lg md:text-xl font-medium text-slate-100 leading-relaxed">
                  {q.question}
                </h3>
              </div>

              <div className="space-y-3 pl-0 md:pl-12">
                {q.options.map((opt, optIdx) => {
                  const isSelected = selectedOpt === optIdx;
                  const isAnswerKey =
                    formSubmitted && q.correctAnswer === optIdx;

                  let optionClass =
                    "w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between group ";

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
                        "bg-blue-600/20 border-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.2)]";
                    } else {
                      optionClass +=
                        "bg-black/20 border-white/5 text-slate-300 hover:bg-white/5 hover:border-white/20";
                    }
                  }

                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleFormSelect(q.id, optIdx)}
                      disabled={formSubmitted}
                      className={optionClass}
                    >
                      <div className="flex items-center">
                        <div
                          className={`w-5 h-5 rounded-full border-2 mr-4 flex items-center justify-center flex-shrink-0 ${
                            isSelected || isAnswerKey
                              ? formSubmitted && isAnswerKey
                                ? "border-emerald-400 bg-emerald-400"
                                : formSubmitted && !isAnswerKey
                                  ? "border-red-400 bg-red-400"
                                  : "border-blue-600 bg-blue-600"
                              : "border-slate-500 group-hover:border-slate-300"
                          }`}
                        >
                          {(isSelected || isAnswerKey) && (
                            <div className="w-2 h-2 bg-white rounded-full" />
                          )}
                        </div>
                        <span className="text-sm md:text-base">{opt}</span>
                      </div>

                      {formSubmitted && isAnswerKey && (
                        <CheckCircle className="w-5 h-5 text-emerald-400" />
                      )}
                      {formSubmitted && isSelected && !isAnswerKey && (
                        <XCircle className="w-5 h-5 text-red-400" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* feedback for wrong answer */}
              {formSubmitted && isWrong && (
                <div className="mt-4 ml-0 md:ml-12 p-3 bg-red-950/30 border border-red-500/20 rounded-lg flex items-start text-red-200 text-sm">
                  <AlertCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Incorrect. The correct answer is marked in green.</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {!formSubmitted && (
        <div className="flex justify-end pt-6">
          <button
            onClick={submitFormQuiz}
            disabled={Object.keys(formAnswers).length < questions.length}
            className={`px-8 py-4 rounded-xl font-bold uppercase tracking-widest transition-all shadow-xl flex items-center ${
              Object.keys(formAnswers).length < questions.length
                ? "bg-slate-700 text-slate-400 cursor-not-allowed opacity-50"
                : "bg-blue-600 hover:bg-blue-500 text-white hover:shadow-blue-500/20 hover:scale-[1.02]"
            }`}
          >
            <CheckSquare className="w-5 h-5 mr-3" />
            Submit Answers
          </button>
        </div>
      )}
    </div>
  );
};
