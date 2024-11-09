type Question = {
  id: number;
  emoji: string;
  text: string;
};

export default function Home() {
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
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      {/* Outer Phone Border */}
      <div className="relative w-[400px] h-[780px] bg-black rounded-[40px] p-2 flex items-center justify-center shadow-2xl border border-gray-800">
        
        {/* Inner Screen */}
        <div className="relative w-full h-full bg-orange-500 rounded-[30px] overflow-hidden">
          
          {/* Notch */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-[155px] h-5 bg-black rounded-b-lg"></div>
          
          {/* Content Area */}
          <div className="flex flex-col items-center justify-center h-full p-4 pt-12 text-center">
            <div className="text-white font-bold text-2xl mb-8">
              Select question to view result
            </div>

            <ul className="w-full space-y-4">
              {questions.map((question) => (
                <li key={question.id}>
                  <button className="w-full flex justify-between items-center bg-white rounded-lg p-4">
                    <div className="flex flex-col">
                      <span className="font-bold">{question.emoji} {question.text}</span>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Bottom Bar */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-[125px] h-1.5 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </div>    
  );
}
