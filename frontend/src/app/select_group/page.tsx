"use client";

import MobileOrangeLayout from "../../components/mobile_orange_layout";
import { useRouter } from "next/navigation";
import { sendJsonRpcRequest } from "../../scripts/rpc";
import { IDENTITY } from "@/scripts/constants";

export default function SelectGroup() {
  const router = useRouter();
  const groupData = [
    { name: "Devcon 2024", location: "Bangkok, Thailand", members: 12341 },
    { name: "Sui Hacker House", location: "Bangkok, Thailand", members: 66 },
    { name: "rAAVE", location: "Bangkok, Thailand", members: 2483 },
  ];

  const handleGroupClick = async () => {
    try {
      await sendJsonRpcRequest("rui_addMember", {
        "identity_commitment": IDENTITY.commitment.toString()
      });
      console.log("(AddMember) Succeeded");
      router.push("/ask_name");
    } catch (err: any) {
      console.error("(AddMember) Error:", err);
    }
  };
  
  return (
    <MobileOrangeLayout>
      <div className="text-[#EBDBC2] text-3xl mb-8 dela-gothic-one">
        Select your group
      </div>

      <ul className="w-full space-y-4">
        {groupData.map((group, index) => (
          <li key={index} className="bg-[#F2EBE1] rounded-lg p-4 shadow-md">
               <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => handleGroupClick()}>
                <div className="flex flex-col text-left">
                  <span className="text-[#051313] black-han-sans">{group.name}</span>
                  <span className="text-[#888682] text-sm">{group.location}</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[#F6783A] black-han-sans">{group.members}</span>
                  <span className="text-[#888682] text-sm">members</span>
                </div>
              </button>
          </li>
        ))}
      </ul>
    </MobileOrangeLayout>
  );
}
