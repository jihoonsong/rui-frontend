import MobileOrangeLayout from '../../components/mobile_orange_layout';
import Link from "next/link";

export default function ViewAnonResults() {
    const anonResults = [
      { name: "112376228254773363395...", votes: 11 },
      { name: "771224134511177185397...", votes: 7 },
      { name: "933266352786270961061...", votes: 3 },
      { name: "132558218938205369033...", votes: 1 },
    ];
    
    return (
      <MobileOrangeLayout>
        <ul className="w-full space-y-4">
          {anonResults.map((anon, index) => (
            <li key={index}>
              <div className="w-full flex justify-between items-center bg-white rounded-lg p-4">
                <div className="flex flex-col text-left">
                  <span className="font-bold">{anon.name}</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-orange-500 font-semibold">{anon.votes}</span>
                  <span className="text-gray-500 text-sm">votes</span>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="text-white font-bold text-xl mt-8">
            Curious to know who picked you?
        </div>
        <button className="mt-4 bg-white text-amber-600 font-semibold py-2 px-9 text-lg rounded-full shadow-md">
            <Link href="/view_actual_results" className="font-bold text-lg text-amber-600">Unlock Names</Link>
        </button>
      </MobileOrangeLayout>
    );
  }
  