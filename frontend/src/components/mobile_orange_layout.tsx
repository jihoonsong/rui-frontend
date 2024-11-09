import React from "react";

interface MobileLayoutProps {
  children: React.ReactNode;
}

const MobileOrangeLayout: React.FC<MobileLayoutProps> = ({ children }) => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      {/* Outer Phone Border */}
      <div className="w-[400px] h-[780px] bg-black rounded-[40px] p-2">

        {/* Inner Screen */}
        <div className="w-full h-full bg-orange-500 rounded-[30px] overflow-hidden">

          {/* Notch */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-[155px] h-5 bg-black rounded-b-lg"></div>

            {/* Content Area */}
            <div className="flex flex-col items-center justify-center h-full p-4 pt-12 text-center">
              {children}
            </div>
            
          {/* Bottom Bar */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-[125px] h-1.5 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default MobileOrangeLayout;