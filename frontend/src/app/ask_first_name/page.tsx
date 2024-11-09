"use client";

import MobileLayout from '../../components/mobile_layout';
import { useState } from "react";

export default function AskFirstName() {
  const [name, setName] = useState("");

  return (
    <MobileLayout>
      <h1 className="text-3xl font-semibold mb-3">What&lsquo;s your first name?</h1>
      
      <input 
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        className="text-3xl font-bold bg-transparent text-center outline-none mb-4 placeholder:text-xl placeholder:text-red-200"
      />

      <button className="mt-4 bg-white text-gray-800 font-semibold py-2 px-9 text-lg rounded-full shadow-md">
        Next
      </button>
    </MobileLayout>
  );
}
