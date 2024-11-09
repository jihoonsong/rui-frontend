"use client";

import MobileLayout from '../../components/mobile_layout';
import { useState } from "react";

type Question = {
  id: number;
  emoji: string;
  text: string;
  options: string[];
};

type Answer = {
  questionId: number;
  answer: string;
};

export default function AskQuestions() {
  const questions: Question[] = [
    {
      id: 1,
      emoji: "🐱",
      text: "Was probably a cat in their past life",
      options: ["Shad Mcfadden", "Ja'Nayia Johnson", "Magnus Davis", "Alex Kaercher"],
    },
    {
      id: 2,
      emoji: "😂",
      text: "Has the best laugh",
      options: ["Taylor Smith", "Jordan Lee", "Casey Brown", "Jamie Wu"],
    },
    {
      id: 3,
      emoji: "🦸",
      text: "Could be a secret superhero",
      options: ["Chris O'Donnell", "Morgan Black", "Patricia Lane", "Robin Torres"],
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Answer[]>([]);

  const handleAnswerClick = (option: string) => {
    setAnswers((prevAnswers) => [
      ...prevAnswers,
      { questionId: questions[currentQuestionIndex].id, answer: option },
    ]);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      alert("You've completed all the questions!");
      console.log("Recorded Answers:", answers);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <MobileLayout>
      <div className="text-gray-300 text-lg mb-8" style={{ minHeight: '24px' }}>
        {currentQuestionIndex + 1} of {questions.length}
      </div>

      <div className="text-7xl mb-10" style={{ minHeight: '72px' }}>
        {currentQuestion.emoji}
      </div>

      <div className="text-2xl font-semibold mb-12" style={{ minHeight: '48px', maxWidth: '300px' }}>
        {currentQuestion.text}
      </div>

      <div className="grid grid-cols-2 gap-4 w-full px-4">
        {currentQuestion.options.map((option) => (
          <button
            key={option}
            onClick={() => handleAnswerClick(option)}
            className="bg-white text-gray-800 py-2 rounded-lg"
          >
            {option}
          </button>
        ))}
      </div>
    </MobileLayout>
  );
}
