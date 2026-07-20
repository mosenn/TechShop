import React from "react";

const ControlSpacing = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="px-container-x-mobile py-container-y-mobile tab:px-container-x-tab tab:py-container-y-tab xl:px-container-x-xl xl:py-container-y-xl ">
      {children}
    </main>
  );
};

export default ControlSpacing;
