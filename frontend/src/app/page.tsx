import MobileOrangeLayout from '../components/mobile_orange_layout';
import Link from "next/link";

export default function Home() {
  return (
    <MobileOrangeLayout>
      <div className="text-white font-bold mb-8">
        <span className="text-7xl">R</span><span className="text-6xl">ui</span>
      </div>

      <button className="flex items-center justify-center w-full max-w-xs px-6 py-4 mb-4 rounded-full shadow-lg bg-white text-gray-700 font-medium">
        <Link href="/select_group" className="font-bold text-lg text-amber-600">Sign up</Link>
      </button>
    </MobileOrangeLayout>
  );
}
