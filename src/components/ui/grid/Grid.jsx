import React from "react";

function Mobile({ children, className }) {
  return (
    <div
      className={`w-mobile-full max-w-mobile-full  ${
        className ? className : ""
      }`}
    >
      <div className="w-mobile h-full mx-auto px-0 grid grid-cols-custom-mobile gap-4">
        {children}
      </div>
    </div>
  );
}

function Desktop({ children, className }) {
  return (
    <div
      className={` w-laptop-full max-w-laptop-full ${
        className ? className : ""
      }`}
    >
      <div className="h-full mx-auto px-0 grid grid-cols-custom-desktop gap-4 w-laptop md:w-tablet sm:w-mobile">
        {children}
      </div>
    </div>
  );
}

function Grid({ children, className }) {
  return <div></div>;
}

Grid.Mobile = Mobile;
Grid.Desktop = Desktop;

export { Grid };
