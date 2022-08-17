import React from "react";

export const LayoutBill = ({ title, billAmount }) => {
  return (
    <>
      <div className="">
        <div className="w-full flex flex-row justify-between p-3">
          <h3 className="font-normal text-md">{title}</h3>
          <h4>${billAmount.toLocaleString("en-US")}</h4>
        </div>
      </div>
    </>
  );
};
