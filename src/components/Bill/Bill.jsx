import React from "react";
import { LayoutBill } from "..";
import { useGlobal } from "../../store/Global.context";
import { Dish } from "./Dish/Dish";

export const Bill = () => {
  return (
    <>
      {/* <div className="flex flex-col space-y-1 bg-white shadow-md rounded-md my-1 divide-y">
        <LayoutBill title="Total Bill" billAmount={state.amount} />
        <LayoutBill title="Left to Pay" billAmount="445.23" />
      </div> */}
      <Dish />
    </>
  );
};
