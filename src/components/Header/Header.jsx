import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LoginButton } from "../ui/Button/LoginButton";

export const Header = ({ ignore }) => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  return (
    <>
      <div className="flex flex-row justify-between px-2 py-2 col-start-1 col-end-13 rounded-b-2xl bg-white shadow-md mb-2 sticky top-0 right-0 left-0">
        <button
          className="flex flex-row items-center space-x-1"
          onClick={() => navigate("/")}
        >
          <img
            src={require("../../utils/images/logo.png")}
            className="h-6 w-5"
          />
          <label className="text-xl">avoqado</label>
        </button>
        <LoginButton />
      </div>
    </>
  );
};
