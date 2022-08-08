import React, { useState } from "react";

export const SelectionButton = () => {
  const [selected, setSelected] = useState("table");

  const handleSelection = (value) => {
    if (value === "table") {
      setSelected("table");
    } else if (value === "user") {
      setSelected("user");
    }
  };

  return (
    <>
      <div className="flex justify-between text-center space-x-1">
        <button
          className={
            selected === "table"
              ? "btn-selected w-full p-3 shadow-sm rounded-md"
              : "w-full p-3 bg-white shadow-sm rounded-md"
          }
          onClick={() => handleSelection("table")}
        >
          Table
        </button>
        <button
          className={
            selected === "user"
              ? "btn-selected w-full p-3 shadow-sm rounded-md"
              : "w-full p-3 bg-white shadow-sm rounded-md"
          }
          onClick={() => handleSelection("user")}
        >
          User
        </button>
      </div>
    </>
  );
};
