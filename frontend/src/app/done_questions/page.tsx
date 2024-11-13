import MobileWhiteLayout from '../../components/mobile_white_layout';
import Link from "next/link";

export default function DoneQuestions() {
    return (
      <MobileWhiteLayout>
        <h1 className="text-3xl text-[#041313] mt-12 mb-4 dela-gothic-one">Congrats!</h1>
        <p className="text-lg text-[#041313] mb-4">You've answered all questions.</p>
        <button className="flex items-center justify-center text-[#A7EAF4] text-lg bg-[#017048] px-6 py-4 mt-32 rounded-full shadow-lg font-medium" style={{ width: "230px" }}>
          <Link href="/select_question">View results</Link>
        </button>  
      </MobileWhiteLayout> 
    );
  }
  