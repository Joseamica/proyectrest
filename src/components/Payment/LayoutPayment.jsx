import { PencilIcon, PlusCircleIcon } from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";
import { useGlobal } from "../../store/Global.context";
import { LayoutTip } from "./Tip/LayoutTip";

export const LayoutPayment = () => {
  // const [amount, setAmount] = useState(0);
  const { state, setState } = useGlobal();
  const { amount, total, tip } = state;
  console.log("valor amount: " + state.total);

  const tipObj = {
    standard: amount * 0.1,
    generous: amount * 0.12,
    amazing: amount * 0.18,
  };

  const handleAmountTip = (tipAmount) => {
    setState((current) => ({
      ...current,
      tip: tipAmount,
      total: current.amount + tipAmount,
    }));
  };
  console.log("amount despues" + state.total, state.tip);

  useEffect(() => {
    console.log("useeffect");
    setState((current) => ({ ...current, total: current.amount }));
  }, []);

  return (
    <div className="space-y-2">
      <div className="flex flex-col bg-white shadow-md rounded-md p-3 space-y-2">
        <h3 className="font-semibold text-2xl">Tip</h3>
        <div className="flex flex-row space-x-1 justify-around ">
          <LayoutTip
            concept="Standard"
            onClick={() => handleAmountTip(tipObj.standard)}
            amount={"$" + tipObj.standard.toFixed()}
          />
          <LayoutTip
            concept="Generous"
            onClick={() => handleAmountTip(tipObj.generous)}
            amount={"$" + tipObj.generous.toFixed(2)}
          />
          <LayoutTip
            concept="Amazing"
            onClick={() => handleAmountTip(tipObj.amazing)}
            amount={"$" + tipObj.amazing.toFixed(2)}
          />
          <LayoutTip
            concept="Other"
            onClick={() => handleAmountTip(0)}
            amount=""
          />
          {/* aqui tengo que poner activar modal */}
        </div>
        {/* Rest of information (promo code, summary of order, total) */}
      </div>
      <div className="flex flex-col bg-white shadow-md rounded-md p-3 divide-y space-y-2">
        <button className="flex flex-row justify-between">
          <div className="flex flex-row items-center space-x-2">
            <PencilIcon className="h-5 w-5" />
            <label>Enter Promo Code</label>
          </div>
          <PlusCircleIcon className="h-7 w-7" />
        </button>
        <div className="flex flex-col">
          <div className="flex flex-row p-3 justify-between">
            <label>Subtotal (tax included)</label>
            <label>${amount}</label>
          </div>
          <div className="flex flex-row p-3 justify-between">
            <label>Tip</label>
            <label>${tip.toFixed(2)}</label>
          </div>
        </div>
        <div className="flex flex-row p-3 justify-between font-bold">
          <label>Total</label>
          <label>${total.toFixed(2)}</label>
        </div>
      </div>
    </div>
  );
};
