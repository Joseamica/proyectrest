import React from "react";
import { StarIcon, BookOpenIcon } from "@heroicons/react/outline";
import { Router, Link } from "react-router-dom";

export const MenuButton = () => {
  return (
    <div className="">
      <Link to="/menu">
        <button
          onClick={() => console.log("Hola")}
          className="py-4 px-4 justify-between flex flex-row w-full items-center bg-white shadow-md rounded-2xl text-center"
        >
          <label>View the Menu</label>
          <BookOpenIcon className="h-5 w-5" />
        </button>
      </Link>
    </div>
  );
};
