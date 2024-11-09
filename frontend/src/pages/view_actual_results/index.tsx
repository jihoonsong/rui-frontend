export default function Home() {
    const actualResults = [
      { name: "Shad Mcfadden" },
      { name: "Taylor Smith" },
      { name: "Casey Brown" },
      { name: "Patricia Lane" },
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
                  {actualResults.map((actual, index) => (
                    <li key={index} className="flex justify-center items-center bg-white rounded-lg p-4 shadow-md">
                      <div className="flex flex-col text-center">
                        <span className="font-bold">{actual.name}</span>
                      </div>
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