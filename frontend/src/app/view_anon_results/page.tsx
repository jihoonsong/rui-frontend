"use client";

import MobileOrangeLayout from '../../components/mobile_orange_layout';
import { WalletProvider, SuiDevnetChain } from "@suiet/wallet-kit";
import WalletButton, { enter } from '@/components/WalletButton';
import { useRouter } from 'next/navigation';

export default function ViewAnonResults() {
    const router = useRouter();
    const anonResults = [
      { name: "112376228254773363...", votes: 11 },
      { name: "771224134511177185...", votes: 7 },
      { name: "933266352786270961...", votes: 3 },
      { name: "132558218938205369...", votes: 1 },
    ];
    
    return (
      <WalletProvider
						chains={[
							SuiDevnetChain,
						]}
					>
        <MobileOrangeLayout>
          <ul className="w-full space-y-4">
            {anonResults.map((anon, index) => (
              <li key={index}>
                <div className="w-full flex justify-between items-center bg-[#F2EBE1] rounded-lg p-4">
                  <div className="flex flex-col text-left">
                    <span className="text-xl text-[#051313] black-han-sans">{anon.name}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-[#F6783A] black-han-sans">{anon.votes}</span>
                    <span className="text-[#888682] text-sm">votes</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="text-[#EBDBC2] dela-gothic-one text-2xl mt-8 mb-3">
              Curious to know who picked you?
          </div>
          <button
            className="mt-4 bg-[#F2EBE1] text-[#1E1E1E] black-han-sans py-2 px-9 text-lg rounded-full shadow-md"
            onClick={async () => {
              await enter()
              router.push("/view_actual_results")
            }}>
              Unlock Names
          </button>
          <div className="text-white font-bold text-xl mt-8">
              <WalletButton/>
          </div>
        </MobileOrangeLayout>
      </WalletProvider>
    );
  }
  