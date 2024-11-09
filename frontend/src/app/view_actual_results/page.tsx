import MobileOrangeLayout from '../../components/mobile_orange_layout';

export default function ViewActualResults() {
    const actualResults = [
      { name: "Shad Mcfadden" },
      { name: "Taylor Smith" },
      { name: "Casey Brown" },
      { name: "Patricia Lane" },
    ];
    
    return (
      <MobileOrangeLayout>
        <ul className="w-full space-y-4">
          {actualResults.map((actual, index) => (
            <li key={index} className="flex justify-center items-center bg-white rounded-lg p-4 shadow-md">
              <div className="flex flex-col text-center">
                <span className="font-bold">{actual.name}</span>
              </div>
            </li>
          ))}
        </ul>
      </MobileOrangeLayout>
    );
  }