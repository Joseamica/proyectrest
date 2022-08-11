import React from "react";
import { StarIcon, BookOpenIcon } from "@heroicons/react/outline";
import { Router, Link } from "react-router-dom";

export const Button = ({ label, className, ...propiedades }) => {
  return (
    <>
      <Link to="/menu">
        <button
          {...propiedades}
          onClick={() => console.log("Hola")}
          className={`py-3 px-4 w-full bg-white shadow-md rounded-lg my-1  hover:bg-mainTextColor hover:text-white ${
            className ? className : ""
          }`}
        >
          <label className="font-bold">{label}</label>
        </button>
      </Link>
    </>
  );
};
