export default function SelectGroup() {
  const groupData = [
    { name: "Devcon 2024", location: "Bangkok, Thailand", members: 12341 },
    { name: "Sui Hacker House", location: "Bangkok, Thailand", members: 66 },
    { name: "Comedy Night", location: "Bangkok, Thailand", members: 430 },
    { name: "Sui Connect", location: "Bangkok, Thailand", members: 232 },
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
              <div className="text-white font-bold text-2xl mb-8">
                Select your group
              </div>

              <ul className="w-full space-y-4">
                {groupData.map((group, index) => (
                  <li key={index} className="flex justify-between items-center bg-white rounded-lg p-4 shadow-md">
                    <div className="flex flex-col text-left">
                      <span className="font-bold">{group.name}</span>
                      <span className="text-gray-500 text-sm">{group.location}</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-orange-500 font-semibold">{group.members}</span>
                      <span className="text-gray-500 text-sm">Members</span>
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