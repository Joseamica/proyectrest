import React, { useState } from "react";

export const SelectionButton = ({ setSection, section }) => {
  const handleSelection = (value) => {
    if (value === "table") {
      setSection("table");
    } else if (value === "user") {
      setSection("user");
    }
  };

  return (
    <>
      <div className="flex justify-between text-center space-x-1 bg-white rounded-2xl ring-2 ring-slighlyGray">
        <button
          className={
            section === "table"
              ? "btn-selected w-full p-3  rounded-2xl"
              : "w-full p-3  drop-shadow-lg rounded-2xl"
          }
          onClick={() => handleSelection("table")}
        >
          Table
        </button>
        <button
          className={
            section === "user"
              ? "btn-selected w-full p-3 rounded-2xl"
              : "w-full p-3   rounded-full"
          }
          onClick={() => handleSelection("user")}
        >
          User
        </button>
      </div>
    </>
  );
};
