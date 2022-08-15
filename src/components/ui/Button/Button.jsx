import React, { useState } from "react";
import { StarIcon, BookOpenIcon, PauseIcon } from "@heroicons/react/outline";
import { Router, Link } from "react-router-dom";

export const Button = ({ label, className, handleState, ...propiedades }) => {
  return (
    <>
      <button
        {...propiedades}
        onClick={handleState}
        className={`py-3 px-4 w-full bg-white shadow-md rounded-lg my-1  hover:bg-mainTextColor hover:text-white ${
          className ? className : ""
        }`}
      >
        <label className="font-medium">{label}</label>
      </button>
    </>
  );
};
