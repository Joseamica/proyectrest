import React from "react";
import { Button } from "../../ui/Button/Button";
import { ModalButton } from "../../ui/Button/ModalButton";

export const PromoCodeModal = ({ onClick }) => {
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
      <ModalButton label={"Confirm"} onClick={onClick} />
    </>
  );
};
