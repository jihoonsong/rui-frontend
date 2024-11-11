"use client";

import { sendJsonRpcRequest } from '@/scripts/rpc';
import MobileOrangeLayout from '../../components/mobile_orange_layout';
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Identity } from '@semaphore-protocol/identity';

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
  const router = useRouter();
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

  const handleAnswerClick = async (option: string) => {
    setAnswers((prevAnswers) => [
      ...prevAnswers,
      { questionId: questions[currentQuestionIndex].id, answer: option },
    ]);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      try {
        let identity = new Identity() // TODO: Send name and let backend replace it with the corresponding identity commitment.
        await sendJsonRpcRequest("rui_addAnswer", {
          "question_id": "0x2977eee10e891c7a032d94522681715592448be31cb38c666442742a9d760c08".toString(),
          "answer": identity.commitment.toString()
        });
        console.log("(AddAnswer) Succeeded");
        router.push("/done_questions");
      } catch (err: any) {
        console.error("(AddAnswer) Error:", err);
      }
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <MobileOrangeLayout>
      <div className="text-gray-100 text-lg mb-8" style={{ minHeight: '24px' }}>
        {currentQuestionIndex + 1} of {questions.length}
      </div>

      <div className="text-7xl mb-10" style={{ minHeight: '72px' }}>
        {currentQuestion.emoji}
      </div>

      <div className="text-white text-2xl font-semibold mb-12" style={{ minHeight: '48px', maxWidth: '300px' }}>
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
    </MobileOrangeLayout>
  );
}
