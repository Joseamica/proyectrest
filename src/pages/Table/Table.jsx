import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { MenuButton, RestInfo, Bill, Dish } from "../../components";
import { LayoutPayment } from "../../components/Payment/LayoutPayment";
import { Component, Modalc } from "../../components/Portals/ModalC";
import { SplitModal } from "../../components/Portals/Modals/SplitModal";
import { TipModal } from "../../components/Portals/Modals/TipModal";
import { Button } from "../../components/ui/Button/Button";
import { SelectionButton } from "../../components/ui/Button/SelectionButton";
import { Input } from "../../components/ui/forms/Input";
import { GlobalProvider, useGlobal } from "../../store/Global.context";

//TODO Exportar los componentes en el index.jsx
export const Table = () => {
  const [button, setButton] = useState({ bill: false, divide: false });
  const [section, setSection] = useState("table");

  //TODO: Modificar el nombre de button y setButton a showModal y setShowModal
  const { bill, divide } = button;

  const handleButton = (parameter) => {
    if (parameter === "pay") {
      setButton({ ...button, bill: true });
    } else if (parameter === "divide") {
      setButton({ ...button, divide: true });
    }
  };

  //REVIEW ESTA BIEN ASI??
  useEffect(() => {
    setTimeout(() => {
      console.log("Scroll running");
      //TODO handleClickBill scrollear
      if (bill) {
        window.scrollTo({ top: 300, behavior: "smooth" });
      }
    }, 1);
  }, [bill]);

  return (
    <>
      {/* REVIEW PREGUNTA AL PROF Porque se tiene que poner aqui para que se extienda? */}
      <section className="col-start-1 col-end-13">
        {/* RestaurantInfo and Button */}
        <div className="flex flex-col space-y-1 ">
          <RestInfo />
          <MenuButton />
        </div>
      </section>
      <section className="col-start-1 col-end-13 space-y-2 mt-1">
        <h3 className="text-lg font-semibold">Table 77 summary</h3>
        <SelectionButton setSection={setSection} section={section} />
      </section>
      {section === "table" ? (
        <>
          <section className="col-start-1 col-end-13">
            <Dish />
          </section>
          <section className="col-start-1 col-end-13">
            <Button
              label={"Pay the bill"}
              handleState={() => handleButton("pay")}
            />
            <Button
              label={"Split the bill"}
              handleState={() => handleButton("divide")}
            />
          </section>
          {bill ? (
            <section className="col-start-1 col-end-13">
              <LayoutPayment />
            </section>
          ) : null}
          {/* {divide ? <Component modal={divide} setButton={setButton} /> : null} */}
          <section className="">
            <Modalc
              onClose={() => setButton(divide)}
              isOpen={divide}
              title="Split"
            >
              <SplitModal />
            </Modalc>
          </section>
        </>
      ) : (
        <>
          <section className="col-start-1 col-end-13">
            <Bill />
          </section>
        </>
      )}
    </>
  );
};
