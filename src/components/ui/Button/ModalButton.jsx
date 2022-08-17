import React, { useState } from "react";
import { StarIcon, BookOpenIcon, PauseIcon } from "@heroicons/react/outline";
import { Router, Link } from "react-router-dom";

export const ModalButton = ({ label, className, ...propiedades }) => {
  return (
    <>
      <button
        {...propiedades}
        className={`py-3 px-4 w-full bg-mainTextColor shadow-md rounded-lg my-1 hover:bg-white text-white  focus:text-mainTextColor
        focus:ring-2 focus:ring-mainTextColor hover:text-mainTextColor focus:bg-white${
          className ? className : ""
        } `}
      >
        <label className="font-medium">{label}</label>
      </button>
    </>
  );
};
