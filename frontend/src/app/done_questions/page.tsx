export default function Home() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-200">
        {/* Outer Phone Border */}
        <div className="relative w-[400px] h-[780px] bg-black rounded-[40px] p-2 flex items-center justify-center shadow-2xl border border-gray-800">
          
          {/* Inner Screen */}
          <div className="relative w-full h-full bg-white rounded-[30px] overflow-hidden">
            
            {/* Notch */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-[155px] h-5 bg-black rounded-b-lg"></div>
            
            {/* Content Area */}
            <div className="flex flex-col items-center justify-center h-full p-4 pt-12 text-center space-y-6">
              <h1 className="text-2xl font-bold">Congrats!</h1>
              <p className="text-lg">You answered all questions.</p>
              <button className="mt-4 px-8 py-2 bg-white border-2 border-green-500 text-green-500 rounded-full text-lg font-semibold flex items-center space-x-2">
                <span>View Results</span>
              </button>            
            </div>
            
            {/* Bottom Bar */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-[125px] h-1.5 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>    
    );
  }
  