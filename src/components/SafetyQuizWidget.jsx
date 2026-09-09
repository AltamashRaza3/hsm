import { useState } from "react";
import { CheckCircle2, XCircle, RotateCcw } from "lucide-react";
import { quizQuestions } from "../data/quiz";

export default function SafetyQuizWidget() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = quizQuestions[current];

  const handleSelect = (index) => {
    if (selected !== null) return;
    setSelected(index);
    if (index === question.correctIndex) setScore((s) => s + 1);
  };

  const handleNext = () => {
    if (current + 1 < quizQuestions.length) {
      setCurrent((c) => c + 1);
      setSelected(null);
    } else {
      setFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  };

  if (finished) {
    return (
      <div className="bg-white border border-stone-200 rounded-sm p-8 md:p-10 text-center max-w-lg mx-auto">
        <p className="text-xs tracking-wide text-green-600 font-medium mb-3">QUIZ COMPLETE</p>
        <p className="font-display text-4xl font-semibold text-charcoal mb-2">
          {score} / {quizQuestions.length}
        </p>
        <p className="text-stone-600 mb-8">
          {score === quizQuestions.length
            ? "Excellent — full marks on core safety knowledge."
            : "A solid attempt. Review the topics you missed and try again."}
        </p>
        <button
          onClick={handleRestart}
          className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white text-sm font-medium px-6 py-3 rounded-sm transition-colors"
        >
          <RotateCcw className="w-4 h-4" /> Retake Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white border border-stone-200 rounded-sm p-6 md:p-8 max-w-lg mx-auto">
      <div className="flex items-center justify-between mb-6">
        <span className="text-xs tracking-wide text-green-600 font-medium">
          QUESTION {current + 1} OF {quizQuestions.length}
        </span>
        <div className="flex gap-1">
          {quizQuestions.map((_, i) => (
            <span
              key={i}
              className={`w-6 h-1 rounded-full ${i <= current ? "bg-green-500" : "bg-stone-200"}`}
            />
          ))}
        </div>
      </div>

      <h3 className="font-display font-medium text-lg text-charcoal mb-6 leading-snug">
        {question.question}
      </h3>

      <div className="space-y-2.5 mb-6">
        {question.options.map((opt, i) => {
          const isCorrect = i === question.correctIndex;
          const isSelected = i === selected;
          let stateClasses = "border-stone-200 hover:border-navy-300";
          if (selected !== null) {
            if (isCorrect) stateClasses = "border-green-500 bg-green-500/5";
            else if (isSelected) stateClasses = "border-red-300 bg-red-50";
            else stateClasses = "border-stone-200 opacity-60";
          }
          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              disabled={selected !== null}
              className={`w-full flex items-center justify-between text-left px-4 py-3 border rounded-sm text-sm text-charcoal transition-colors ${stateClasses}`}
            >
              {opt}
              {selected !== null && isCorrect && <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />}
              {selected !== null && isSelected && !isCorrect && <XCircle className="w-4 h-4 text-red-500 shrink-0" />}
            </button>
          );
        })}
      </div>

      {selected !== null && (
        <button
          onClick={handleNext}
          className="w-full bg-navy-900 hover:bg-navy-800 text-white text-sm font-medium px-6 py-3 rounded-sm transition-colors"
        >
          {current + 1 < quizQuestions.length ? "Next Question" : "See Results"}
        </button>
      )}
    </div>
  );
}
