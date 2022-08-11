import React, { useContext } from "react";
import { MenuButton, RestInfo, Bill } from "../../components";
import { Button } from "../../components/ui/Button/Button";
import { SelectionButton } from "../../components/ui/Button/SelectionButton";
import { Input } from "../../components/ui/forms/Input";
import { GlobalProvider } from "../../store/Global.context";

export const Table = () => {
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
        <h3 className="text-xl">Table Summary</h3>
        <SelectionButton />
      </section>
      <section className="col-start-1 col-end-13">
        <Bill />
      </section>
      <section className="col-start-1 col-end-13">
        <Button label={"Pay the Bill"} />
        <Button label={"Split the Bill"} />
      </section>
      <section> saludo c:</section>
    </>
  );
};
