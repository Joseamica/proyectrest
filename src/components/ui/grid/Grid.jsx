import React from "react";

function Grid({ children, className }) {
  return (
    <div
      className={` 
      w-full 
      max-w-laptop-full bg-purple-500
      md:max-tablet-full md:bg-red-500
      sm:max-w-mobile sm:bg-yellow-500
    ${className ? className : ""}`}
    >
      <div
        className="
      w-full h-full mx-auto px-0 grid 
      grid-cols-custom-laptop
      md:grid-cols-custom-laptop
      sm:grid-cols-custom-mobile gap-4
      
      "
      >
        {children}
      </div>
    </div>
  );
}

export { Grid };
