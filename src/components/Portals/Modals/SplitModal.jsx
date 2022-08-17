import React from "react";
import { Button } from "../../ui/Button/Button";

export const SplitModal = () => {
  return (
    <>
      <div className="py-4 flex flex-row">
        <label className="text-4xl"></label>
        <input
          type="text"
          placeholder="Enter here"
          className="text-2xl w-full ring-2 ring-mainTextColor rounded-lg px-3"
        />
      </div>
      <Button label={"Confirm"} />
    </>
  );
};
