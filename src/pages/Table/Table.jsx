import React, { useContext } from "react";
import { useState, useEffect } from "react";
import {
  MenuButton,
  RestInfo,
  Bill,
  Dish,
  SplitModal,
  Modalc,
  Button,
  LayoutPayment,
  SelectionButton,
} from "../../components";
import { useGlobal } from "../../store/Global.context";

export const Table = () => {
  const [showModal, setShowModal] = useState({ bill: false, split: false });
  const [section, setSection] = useState("table");
  const { state, setState } = useGlobal();
  const { total } = state;

  const handleButton = (parameter) => {
    if (parameter === "pay") {
      setShowModal((prevState) => ({ bill: true }));
      setTimeout(() => {
        window.scrollTo({ top: 300, behavior: "smooth" });
      }, 500);
    } else if (parameter === "split") {
      setShowModal((prevState) => ({ split: true }));
    }
    // handleClickBill(parameter);
  };

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      total: prevState.amount + prevState.tip,
    }));
  }, []);

  return (
    <>
      {/* C-START: RESTAURANT INFORMATION AND THE BUTTON ! */}
      <section className="col-start-1 col-end-13">
        <div className="flex flex-col space-y-1 ">
          <RestInfo />
          <MenuButton />
        </div>
      </section>
      {/* C-START: SelectionButton -> TabButton cambia entre Table y User */}
      <section className="col-start-1 col-end-13 space-y-2 mt-1">
        <h3 className="text-lg font-semibold">Table 77 summary</h3>
        <SelectionButton setSection={setSection} section={section} />
      </section>
      {/* CONDITIONAL: depende del boton de <SelectionButton/> el cual se encarga de mostrar
      la informacion dependiendo lo que escoja el usuario */}
      {section === "table" ? (
        //CONDITIONAL-A
        <>
          {/* C-START: DISH -> Aqui se controla el TotalBill, LeftToPay, y cuantos platillos llevan agregados */}
          <section className="col-start-1 col-end-13">
            <Dish />
          </section>
          {/* C-START: Los botones de Pay the bill y split the bill */}
          <section className="col-start-1 col-end-13">
            <Button
              label={"Pay the bill"}
              handleState={() => handleButton("pay")}
            />
            <Button
              label={"Split the bill"}
              handleState={() => handleButton("split")}
            />
          </section>
          {/* CONDITIONAL: Si el boton pay the bill se pushea, se convierte en true lo cual
          hace que aparezca el resumen del pago
          */}
          {showModal.bill ? (
            //CONDITIONAL-A
            //C-START: layout component
            <section className="col-start-1 col-end-13">
              <LayoutPayment />
            </section>
          ) : null}
          {/* {split ? <Component modal={split} setButton={setButton} /> : null} */}
          {/* C-START: Aqui estan localizados los Modals */}
          <section className="">
            <Modalc
              onClose={() =>
                setShowModal((prevState) => ({ ...prevState, split: false }))
              }
              isOpen={showModal.split}
              title="Split"
            >
              <SplitModal
                onClick={() =>
                  setShowModal((prevState) => ({ ...prevState, split: false }))
                }
              />
            </Modalc>
          </section>
        </>
      ) : (
        //CONDITIONAL-B
        // TODO Poner todo lo que tiene que llevar el userTab.
        <>
          <section className="col-start-1 col-end-13">
            <Bill />
          </section>
        </>
      )}
    </>
  );
};
