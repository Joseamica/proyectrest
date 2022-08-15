import { PencilIcon } from "@heroicons/react/outline";
import React from "react";

export const LayoutTip = ({ concept, amount, ...rest }) => {
  return (
    <>
      <button
        {...rest}
        className="flex flex-col border-slighlyGray border-solid border items-center text-left p-2 rounded-md min-w-[20%]"
      >
        <label className="text-mainTextColor">{concept}</label>
        {amount === "" ? (
          <PencilIcon className="h-5 w-5" />
        ) : (
          <label className="font-medium">{amount}</label>
        )}
      </button>
    </>
  );
};
