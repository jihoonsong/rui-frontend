"use client";

import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      {/* Outer Phone Border */}
      <div className="relative w-[400px] h-[780px] bg-black rounded-[40px] p-2 flex items-center justify-center shadow-2xl border border-gray-800">

        {/* Inner Screen */}
        <div className="relative w-full h-full bg-orange-500 rounded-[30px] overflow-hidden">

          {/* Notch */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-[155px] h-5 bg-black rounded-b-lg"></div>

            {/* Content Area */}
            <div className="flex flex-col items-center justify-center h-full p-4 pt-12 text-center text-white">

              {/* Prompt Text */}
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
            </div>
            
          {/* Bottom Bar */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-[125px] h-1.5 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </div>    
  );
}
