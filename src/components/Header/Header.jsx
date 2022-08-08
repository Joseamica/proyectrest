import React from "react";
import { LoginButton } from "../ui/Button/LoginButton";

export const Header = () => {
  return (
    <>
      <div className="flex flex-row justify-between px-2 py-4 col-start-1 col-end-13 rounded-b-md bg-white">
        <div className="flex flex-row items-center space-x-1">
          <img
            src={require("../../utils/images/logo.png")}
            className="h-6 w-5"
          />
          <label className="text-xl">avoqado</label>
        </div>
        <LoginButton />
      </div>
    </>
  );
};
