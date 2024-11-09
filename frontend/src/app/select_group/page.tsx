import MobileOrangeLayout from '../../components/mobile_orange_layout';
import Link from "next/link";

export default function SelectGroup() {
  const groupData = [
    { name: "Devcon 2024", location: "Bangkok, Thailand", members: 12341 },
    { name: "Sui Hacker House", location: "Bangkok, Thailand", members: 66 },
    { name: "Comedy Night", location: "Bangkok, Thailand", members: 430 },
    { name: "Sui Connect", location: "Bangkok, Thailand", members: 232 },
  ];
  
  return (
    <MobileOrangeLayout>
      <div className="text-white font-bold text-2xl mb-8">
        Select your group
      </div>

      <ul className="w-full space-y-4">
        {groupData.map((group, index) => (
          <li key={index} className="bg-white rounded-lg p-4 shadow-md">
            <Link href="/ask_first_name" className="flex justify-between items-center">
              <div className="flex flex-col text-left">
                <span className="font-bold">{group.name}</span>
                <span className="text-gray-500 text-sm">{group.location}</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-orange-500 font-semibold">{group.members}</span>
                <span className="text-gray-500 text-sm">Members</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </MobileOrangeLayout>
  );
}