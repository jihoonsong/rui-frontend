import MobileWhiteLayout from '@/components/mobile_white_layout';
import { IDENTITY } from '@/scripts/constants';
import Link from 'next/link';

export default function InformAnonId() {
  return (
    <MobileWhiteLayout>
      <h1 className="text-3xl text-[#041313] mt-12 mb-4 dela-gothic-one">Welcome!</h1>
      <p className="text-lg text-[#041313]">Here is your anonymous ID.</p>
      <p className="text-lg text-[#041313] mb-8">(Don't let other people know!)</p>
      <div 
          className="bg-[#A7EAF4] text-[#017048] text-xl mb-5 break-all whitespace-normal" 
          style={{ minHeight: "24px", wordBreak: "break-word" }}
        >
        {IDENTITY.commitment}
      </div>
      <button className="flex items-center justify-center text-[#A7EAF4] text-lg bg-[#017048] px-6 py-4 mt-28 rounded-full shadow-lg font-medium" style={{ width: "230px" }}>
          <Link href="/ask_questions">Next</Link>
        </button>
      </MobileWhiteLayout> 
  );
}
