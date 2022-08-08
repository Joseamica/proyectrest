import React from "react";
import { MenuButton, RestInfo } from "../../components";
import { SelectionButton } from "../../components/ui/Button/SelectionButton";

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
    </>
  );
};
