import { PencilIcon, PlusCircleIcon } from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";
import { useGlobal } from "../../store/Global.context";
import { Modalc } from "../Portals/ModalC";
import { PromoCodeModal } from "../Portals/Modals/PromoCodeModal";
import { TipModal } from "../Portals/Modals/TipModal";
import { LayoutTip } from "./Tip/LayoutTip";

export const LayoutPayment = ({ tipState, setTipState }) => {
  // const [amount, setAmount] = useState(0);
  const { state, setState } = useGlobal();
  const { amount, total, tip } = state;
  const [promoModal, setPromoModal] = useState(false);
  const [showModal, setShowModal] = useState({
    status: false,
    section: "",
  });

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

  // useEffect(() => {
  //   console.log("useeffect");
  //   setState((current) => ({ ...current, total: current.amount }));
  // }, []);
  console.log(state);
  return (
    <div className="space-y-2">
      <div className="flex flex-col bg-white shadow-md rounded-md p-3 space-y-2">
        <h3 className="font-semibold text-2xl">Tip</h3>
        <div className="flex flex-row space-x-1 justify-around ">
          <LayoutTip
            concept="Standard"
            onClick={() => handleAmountTip(tipObj.standard)}
            amount={"$" + tipObj.standard.toLocaleString("en-US")}
          />
          <LayoutTip
            concept="Generous"
            onClick={() => handleAmountTip(tipObj.generous)}
            amount={"$" + tipObj.generous.toLocaleString("en-US")}
          />
          <LayoutTip
            concept="Amazing"
            onClick={() => handleAmountTip(tipObj.amazing)}
            amount={"$" + tipObj.amazing.toLocaleString("en-US")}
          />
          <LayoutTip
            concept="Other"
            onClick={() =>
              setShowModal((prevState) => ({ status: true, section: "other" }))
            }
            amount={"$" + tip}
          />
          {/* aqui tengo que poner activar modal */}
        </div>
        {/* Rest of information (promo code, summary of order, total) */}
      </div>
      <div className="flex flex-col bg-white shadow-md rounded-md p-3 divide-y space-y-2">
        <button
          className="flex flex-row justify-between"
          onClick={() =>
            setShowModal((prevState) => ({ status: true, section: "promo" }))
          }
        >
          <div className="flex flex-row items-center space-x-2">
            <PencilIcon className="h-5 w-5" />
            <label>Enter Promo Code</label>
          </div>
          <PlusCircleIcon className="h-7 w-7" />
        </button>
        <div className="flex flex-col">
          <div className="flex flex-row p-3 justify-between">
            <label>Subtotal (tax included)</label>
            <label>${amount.toLocaleString("en-US")}</label>
          </div>
          <div className="flex flex-row p-3 justify-between">
            <label>Tip</label>
            <label>${tip}</label>
          </div>
        </div>
        <div className="flex flex-row p-3 justify-between font-bold">
          <label className="text-xl">Total</label>
          <label className="text-xl">${total.toLocaleString("en-US")}</label>
        </div>
      </div>
      <Modalc
        onClose={() =>
          setShowModal((prevState) => ({ ...prevState, status: false }))
        }
        isOpen={showModal.status}
        title="¿Quisieras dejar propina?"
      >
        {showModal.section === "other" ? (
          <TipModal
            onClick={() =>
              setShowModal((prevState) => ({ ...prevState, status: false }))
            }
          />
        ) : null}

        {showModal.section === "promo" ? (
          <PromoCodeModal
            onClick={() =>
              setShowModal((prevState) => ({ ...prevState, status: false }))
            }
          />
        ) : null}
      </Modalc>
    </div>
  );
};
