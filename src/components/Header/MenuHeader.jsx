import { ArrowCircleLeftIcon, ArrowLeftIcon } from "@heroicons/react/solid";
import React from "react";
import { useNavigate } from "react-router-dom";

export const MenuHeader = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="col-start-1 col-end-13  px-2 py-4  bg-white shadow-md rounded-b-2xl mb-2">
        <div className="flex space-x-2 justify-between ">
          <button onClick={() => navigate(-1)}>
            <ArrowLeftIcon className="h-5 w-5" />
          </button>
          <label className="">Menu</label>
          <label></label>
        </div>
      </div>
    </>
  );
};
