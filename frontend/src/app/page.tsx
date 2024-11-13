import MobileOrangeLayout from '../components/mobile_orange_layout';
import Link from "next/link";

export default function Home() {
  return (
    <MobileOrangeLayout>
      <div className="text-white font-bold mt-4 mb-6">
        <img src="rui.svg" alt="Rui" className="w-auto h-32" />
      </div>

      <button className="flex items-center justify-center px-6 py-4 mt-36 rounded-full shadow-lg bg-[#F3ECE1] font-medium" style={{ width: "230px" }}>
        <Link href="/select_group" className="font-bold text-lg text-[#1E1E1E]"> Sign up</Link>
      </button>
    </MobileOrangeLayout>
  );
}
