import React from "react";
import { useState } from "react";
import { useGlobal } from "../../../store/Global.context";
import { ModalButton } from "../../ui/Button/ModalButton";

export const TipModal = (props) => {
  const { state, setState, tip } = useGlobal();
  const [inputTip, setInputTip] = useState("");

  const handleInput = (e) => {
    setInputTip(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setState((current) => ({
      ...current,
      tip: 0,
      total: 0,
      tip: inputTip,
      total: current.amount + parseInt(inputTip),
    }));
    props.onClick();
  };

  return (
    <>
      <div className="py-4 flex flex-row">
        <label className="text-4xl">$</label>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            placeholder="0.00"
            className="text-4xl w-full"
            onChange={(e) => handleInput(e)}
            value={inputTip}
            name="inputTip"
            // value={state.tip}
          />
        </form>
      </div>
      <ModalButton label={"Confirm"} onClick={handleSubmit} />
    </>
  );
};
