import MobileOrangeLayout from '../../components/mobile_orange_layout';
import Link from "next/link";

type Question = {
  id: number;
  emoji: string;
  text: string;
};

export default function SelectQuestion() {
  const questions: Question[] = [
    {
      id: 1,
      emoji: "🐱",
      text: "Was probably a cat in their past life",
    },
    {
      id: 2,
      emoji: "😂",
      text: "Has the best laugh",
    },
    {
      id: 3,
      emoji: "🦸",
      text: "Could be a secret superhero",
    },
  ];

  return (
    <MobileOrangeLayout>
      <div className="dela-gothic-one text-3xl text-[#EBDBC2] mb-8">
        Pick a question to view results
      </div>

      <ul className="w-full space-y-4">
        {questions.map((question) => (
          <li key={question.id}>
            <Link href="/view_anon_results" className="w-full flex justify-between items-center bg-[#F2EBE1] rounded-lg p-4">
              <div className="flex flex-col">
                <span className="black-han-sans text-sm text-[#051313]">{question.emoji} {question.text}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </MobileOrangeLayout>
  );
}
