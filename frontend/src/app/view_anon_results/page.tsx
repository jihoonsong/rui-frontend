import MobileLayout from '../../components/mobile_layout';

export default function ViewAnonResults() {
    const anonResults = [
      { name: "112376228254773363395", votes: 11 },
      { name: "771224134511177185397", votes: 7 },
      { name: "933266352786270961061", votes: 3 },
      { name: "132558218938205369033", votes: 1 },
    ];
    
    return (
      <MobileLayout>
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
      </MobileLayout>
    );
  }
  