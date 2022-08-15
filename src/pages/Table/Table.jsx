import React, { useContext } from "react";
import { useState } from "react";
import { MenuButton, RestInfo, Bill } from "../../components";
import { LayoutPayment } from "../../components/Payment/LayoutPayment";
import { Component, Modalc } from "../../components/Portals/ModalC";
import { Button } from "../../components/ui/Button/Button";
import { SelectionButton } from "../../components/ui/Button/SelectionButton";
import { Input } from "../../components/ui/forms/Input";
import { GlobalProvider, useGlobal } from "../../store/Global.context";

export const Table = () => {
  const [button, setButton] = useState({ bill: false, divide: false });

  const { bill, divide } = button;

  const handleButton = (parameter) => {
    if (parameter === "pay") {
      setButton({ bill: true, divide: false });
    } else if (parameter === "divide") {
      setButton({ bill: false, divide: true });
    }
    console.log(bill, divide);
  };
  return (
    <>
      {/* REVIEW PREGUNTA AL PROF Porque se tiene que poner aqui para que se extienda? */}
      <section className="col-start-1 col-end-13 shadow-md">
        {/* RestaurantInfo and Button */}
        <div className="flex flex-col space-y-1 ">
          <RestInfo />
          <MenuButton />
        </div>
      </section>
      <section className="col-start-1 col-end-13 space-y-2">
        <h3 className="text-xl">Table 77 summary</h3>
        <SelectionButton />
      </section>
      <section className="col-start-1 col-end-13">
        <Bill />
      </section>
      <section className="col-start-1 col-end-13">
        <Button
          label={"Pay the Bill"}
          handleState={() => handleButton("pay")}
        />
        <Button
          label={"Split the Bill"}
          handleState={() => handleButton("divide")}
        />
      </section>
      {bill ? (
        <section className="col-start-1 col-end-13">
          <LayoutPayment />
        </section>
      ) : null}

      {/* {divide ? <Component modal={divide} setButton={setButton} /> : null} */}
      <Modalc onClose={() => setButton(divide)} isOpen={divide}>
        Aaa
      </Modalc>
    </>
  );
};
