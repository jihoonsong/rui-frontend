import Link from "next/link";
import MobileLayout from '../../components/mobile_layout'

export default function Home() {
  return (
    <MobileLayout>
      <div className="text-white font-bold mb-8">
        <span className="text-7xl">R</span><span className="text-6xl">ui</span>
      </div>

      <button className={`flex items-center justify-center w-full max-w-xs px-6 py-4 mb-4 rounded-full shadow-lg bg-white text-gray-700 font-medium`}>
        <Link className="text-yellow-700 font-bold" href={"/select_group"}>Sign up</Link>
      </button>
    </MobileLayout>
  );
}
