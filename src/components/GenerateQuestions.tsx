import { useState, useEffect, useCallback } from "react";

const keys = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
  ["⌫", "0", "✓"],
];

function generateQuestion() {
  const a = Math.floor(Math.random() * 9) + 10;
  const b = Math.floor(Math.random() * 9) + 10;
  return { a, b, operator: "+", answer: a + b };
}

export default function PracticeScreen() {
  const [question, setQuestion] = useState(generateQuestion());
  const [input, setInput] = useState("");
  const [previous, setPrevious] = useState<null | {
    a: number;
    b: number;
    answer: number;
    userAnswer: string;
  }>(null);
  const [correct, setCorrect] = useState(0);
  const [total, setTotal] = useState(0);

  const handleKey = useCallback(
    (key: string) => {
      if (key === "⌫" || key === "Backspace") {
        setInput((v) => v.slice(0, -1));
      } else if (key === "✓" || key === "Enter") {
        if (!input) return;
        setPrevious({ ...question, userAnswer: input });
        setTotal((t) => t + 1);
        if (parseInt(input) === question.answer) setCorrect((c) => c + 1);
        setInput("");
        setQuestion(generateQuestion());
      } else if (/^\d$/.test(key) && input.length < 7) {
        setInput((v) => v + key);
      } else if (key === " ") {
        // skip
        setPrevious({ ...question, userAnswer: "—" });
        setInput("");
        setQuestion(generateQuestion());
      } else if (key === "Delete") {
        setInput("");
      }
    },
    [input, question],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (
        ["Enter", "Backspace", " ", "Delete"].includes(e.key) ||
        /^\d$/.test(e.key)
      ) {
        e.preventDefault();
        handleKey(e.key);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handleKey]);

  const accuracy = total > 0 ? Math.round((correct / total) * 100) : 100;
  const isCorrect =
    previous && parseInt(previous.userAnswer) === previous.answer;

  return (
    <div className="flex justify-center">
      <div className="w-[1000px] text-white flex flex-col my-6">
        {/* Top Bar */}
        <div className="flex items-center justify-between px-6 py-2 text-xs text-gray-400 border-b border-white/5">
          <div className="flex items-center gap-4">
            <div className="p-1 blinking h-[5px] w-fit"></div>
            <span>
              🧠 Questions{" "}
              <span className="text-purple-400 font-bold">{total}</span> /{" "}
              <span className="text-gray-300">∞</span>
            </span>
          </div>
          {previous && (
            <span className="text-center text-xs">
              Previous:{" "}
              <span className="text-gray-300">
                {previous.a} + {previous.b} ={" "}
              </span>
              <span className="text-purple-300 font-semibold">
                {previous.answer.toLocaleString()}
              </span>{" "}
              {isCorrect ? (
                <span className="text-green-400">✓ Correct</span>
              ) : (
                <span className="text-red-400">✗ {previous.userAnswer}</span>
              )}
            </span>
          )}
          <div className="flex gap-4">
            <span>
              Accuracy:{" "}
              <span
                className={accuracy >= 80 ? "text-green-400" : "text-red-400"}
              >
                {accuracy}%
              </span>
            </span>
            <span>
              ✓ <span className="text-green-400 font-bold">{correct}</span>
            </span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-[2px] bg-white/5">
          <div
            className="h-full bg-purple-500 transition-all duration-500"
            style={{ width: `${Math.min((total / 20) * 100, 100)}%` }}
          />
        </div>

        {/* Main content */}
        <div className="flex-1 flex flex-col my-4 items-center justify-center gap-6">
          {/* Question */}
          <div className="flex items-end text-5xl text-center font-mono leading-tight">
            <div className="mr-4">{question.operator}</div>
            <div>
              <div className="text-5xl font-bold text-white">{question.a}</div>
              <div className="text-5xl font-bold text-purple-300 mt-1">
                {question.b}
              </div>
            </div>
          </div>

          {/* Answer input display */}
          <div className="w-48 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-2xl font-mono tracking-widest">
            {input || <span className="text-white/20 text-3xl">?</span>}
          </div>

          <p className="text-xs text-gray-500">
            ← Press <kbd className="bg-white/10 px-1 rounded">Enter</kbd> to
            submit
          </p>

          {/* Submit button */}
          <button
            onClick={() => handleKey("✓")}
            className="px-6 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg text-sm font-semibold transition"
          >
            Submit →
          </button>
        </div>

        {/* Numpad */}
        <div className="flex flex-col items-center pb-10 gap-4">
          {/* Hints */}
          <div className="flex gap-10 text-[11px] text-gray-500 font-mono">
            <span>
              <span className="text-gray-400 font-semibold">SPACE:</span> NEXT
              FORMULA
            </span>
            <span>
              <span className="text-gray-400 font-semibold">DEL:</span> CLEAR
            </span>
          </div>

          {/* Numpad grid */}
          <div className="flex gap-8">
            <div className="flex flex-col gap-2">
              <p className="text-[10px] text-gray-500 text-center">
                SUPER OFFICE
              </p>
              <div className="grid grid-cols-3 gap-2">
                {keys.map((row, ri) =>
                  row.map((key) => {
                    const isSubmit = key === "✓";
                    const isDelete = key === "⌫";
                    const isHighlighted = ["2", "5", "8"].includes(key);
                    return (
                      <button
                        key={`${ri}-${key}`}
                        onClick={() => handleKey(key)}
                        className={`
                        w-14 h-14 rounded-xl text-lg font-bold font-mono transition
                        ${
                          isSubmit
                            ? "bg-purple-600 hover:bg-purple-500 text-white"
                            : isDelete
                              ? "bg-white/10 hover:bg-white/20 text-red-400"
                              : isHighlighted
                                ? "bg-white/5 hover:bg-purple-900/40 text-purple-400 border border-purple-800/40"
                                : "bg-white/5 hover:bg-white/10 text-white"
                        }
                      `}
                      >
                        {key}
                      </button>
                    );
                  }),
                )}
              </div>
            </div>

            {/* Numpad label */}
            {/* <div className="flex flex-col justify-start pt-5">
              <p className="text-[10px] text-yellow-400/70">⌨ TYPED</p>
            </div> */}
          </div>

          {/* Keyboard shortcuts legend */}
          {/* <div className="flex gap-4 text-[10px] text-gray-600 mt-2">
            {["[A/Z]", "[ENTER]", "[SPACE]", "[CTRL+Z]"].map((s) => (
              <span key={s} className="bg-white/5 px-2 py-1 rounded">
                {s}
              </span>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
}
