"use client";

import MobileOrangeLayout from '../../components/mobile_orange_layout';
import Link from "next/link";
import { useState } from "react";

export default function AskLastName() {
  const [lastName, setLastName] = useState("");

  return (
    <MobileOrangeLayout>
      <h1 className="text-[#EBDBC2] text-3xl mb-5 dela-gothic-one">What&rsquo;s your name?</h1>
      
      <input 
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="enter your name here"
        className="text-[#F3ECE1] text-3xl font-bold bg-transparent text-center outline-none mb-4 placeholder:text-2xl placeholder:text-red-200"
      />

      <button className="flex items-center justify-center px-6 py-4 mt-10 rounded-full shadow-lg bg-[#F3ECE1] font-medium" style={{ width: "230px" }}>
        <Link href="/ask_questions" className="font-bold text-[#1E1E1E]">Next</Link>
      </button>
    </MobileOrangeLayout>
  );
}
