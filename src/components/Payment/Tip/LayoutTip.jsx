import { PencilIcon } from "@heroicons/react/outline";
import React from "react";

export const LayoutTip = ({ concept, amount, ...rest }) => {
  return (
    <>
      <button
        {...rest}
        className="flex flex-col border-slighlyGray border-solid border items-center text-left p-2 rounded-md min-w-[20%] focus:ring-2 focus:ring-mainTextColor"
      >
        <label className="text-mainTextColor text-xs">{concept}</label>
        {amount === "$" + 0 ? (
          <PencilIcon className="h-5 w-5" />
        ) : (
          <label className="font-medium text-sm">{amount}</label>
        )}
      </button>
    </>
  );
};
