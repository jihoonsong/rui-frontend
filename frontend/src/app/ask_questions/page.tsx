"use client";

import { sendJsonRpcRequest } from '@/scripts/rpc';
import MobileOrangeLayout from '../../components/mobile_orange_layout';
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Identity } from '@semaphore-protocol/identity';
import { IDENTITY, QUESTION_ID } from '@/scripts/constants';
import type { BigNumberish } from "ethers"
import { keccak256 } from "ethers/crypto"
import { toBeHex } from "ethers/utils"

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
      options: ["Casey Brown", "Jamie Wu", "Magnus Davis", "Alex Kaercher"],
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
          "secret_bytes": IDENTITY.secretScalar.toString(),
          "message_bytes": hash(IDENTITY.commitment.toString()),
          "scope_bytes": hash(QUESTION_ID),
          "question_id": QUESTION_ID,
          "answer": identity.commitment.toString()
        });
        console.log("(AddAnswer) Succeeded");
        router.push("/done_questions");
      } catch (err: any) {
        console.error("(AddAnswer) Error:", err);
      }
    }
  };

  function hash(message: BigNumberish): string {
    return (BigInt(keccak256(toBeHex(message, 32))) >> BigInt(8)).toString()
  }
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <MobileOrangeLayout>
      <div className="text-[#FFB18A] text-xl mb-5" style={{ minHeight: '24px' }}>
        {currentQuestionIndex + 1} / {questions.length}
      </div>

      <div className="text-7xl mb-8" >
        <img src="cat.svg" alt="Cat" className="h-20" />
      </div>

      <div className="text-[#EBDBC2] text-2xl mb-12 dela-gothic-one" style={{ minHeight: '48px', maxWidth: '300px' }}>
        {currentQuestion.text}
      </div>

      <div className="grid grid-cols-2 gap-4 w-full px-4">
        {currentQuestion.options.map((option) => (
          <button
            key={option}
            onClick={() => handleAnswerClick(option)}
            className="bg-[#F2EBE1] black-han-sans text-[#051313] py-2 rounded-lg"
          >
            {option}
          </button>
        ))}
      </div>
    </MobileOrangeLayout>
  );
}
