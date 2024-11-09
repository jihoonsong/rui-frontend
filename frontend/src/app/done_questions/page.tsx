import MobileWhiteLayout from '../../components/mobile_white_layout';
import Link from "next/link";

export default function DoneQuestions() {
    return (
      <MobileWhiteLayout>
        <h1 className="text-3xl font-bold mb-4">Congrats!</h1>
        <p className="text-lg mb-8">You've answered all questions.</p>
        <button className="mt-4 px-8 py-2 bg-white border-2 border-green-500 text-green-500 rounded-full text-lg font-semibold flex items-center space-x-2">
          <Link href="/select_question">View Results</Link>
        </button>  
      </MobileWhiteLayout> 
    );
  }
  