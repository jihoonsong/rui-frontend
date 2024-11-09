export default function Home() {
    const anonResults = [
      { name: "112376228254773363395", votes: 11 },
      { name: "771224134511177185397", votes: 7 },
      { name: "933266352786270961061", votes: 3 },
      { name: "132558218938205369033", votes: 1 },
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
              <ul className="w-full space-y-4">
                {anonResults.map((anon, index) => (
                  <li key={index}>
                    <button className="w-full flex justify-between items-center bg-white rounded-lg p-4">
                      <div className="flex flex-col text-left">
                        <span className="font-bold">{anon.name}</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="text-orange-500 font-semibold">{anon.votes}</span>
                        <span className="text-gray-500 text-sm">votes</span>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
  
              <div className="text-white font-bold text-xl mt-8">
                  Select your group
              </div>
              <button className="mt-4 bg-white text-gray-800 font-semibold py-2 px-9 text-lg rounded-full shadow-md">
                  Unlock Results
              </button>
            </div>
            
            {/* Bottom Bar */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-[125px] h-1.5 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>    
    );
  }
  