import { UserAddIcon, UserCircleIcon } from "@heroicons/react/solid";
import React from "react";

export const LoginButton = () => {
  return (
    <>
      <button className="px-4 py-2 flex flex-row rounded-full bg-white text-mainTextColor space-x-1 items-center shadow-md hover:bg-mainTextColor hover:text-white">
        <UserCircleIcon className="h-5 w-5 text-redMainColor " />
        <label>sign in</label>
      </button>
    </>
  );
};
