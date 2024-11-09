"use client";

import MobileOrangeLayout from '../../components/mobile_orange_layout';
import Link from "next/link";
import { useState } from "react";

export default function AskFirstName() {
  const [firstName, setFirstName] = useState("");

  return (
    <MobileOrangeLayout>
      <h1 className="text-white text-3xl font-semibold mb-3">What&lsquo;s your first name?</h1>
      
      <input 
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="Enter your name"
        className="text-white text-3xl font-bold bg-transparent text-center outline-none mb-4 placeholder:text-xl placeholder:text-red-200"
      />

      <button className="mt-4 bg-white text-gray-800 font-semibold py-2 px-9 text-lg rounded-full shadow-md">
        <Link href="/ask_last_name" className="font-bold text-amber-600">Next</Link>
      </button>
    </MobileOrangeLayout>
  );
}
