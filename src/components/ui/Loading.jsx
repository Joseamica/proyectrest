import React from "react";

export const Loading = () => {
  return (
    <div className="bg-black inset-0 absolute bg-opacity-80">
      <div className="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2 ">
        <div
          className="inline-block w-10 h-10
            border-8
            border-t-white
            border-r-white
            border-b-mainTextColor
            border-l-mainTextColor
            rounded-full 
            animate-spin"
        ></div>
      </div>
      {/* 
      <div class="w-24 h-24 p-5 bg-indigo-600 rounded-full flex items-center justify-center">
        <div class="w-24 h-2 bg-white animate-spin rounded-lg"></div>
        <div>a</div>
      </div> */}
    </div>
  );
};
