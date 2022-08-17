import React, { useEffect, useState } from "react";
import { useGlobal } from "../../../store/Global.context";
import { LayoutBill } from "../LayoutBill";
import { LayoutDish, LayoutFood } from "./LayoutDish";

export const Dish = () => {
  const [dish, setDish] = useState([]);
  const { state, setState, toPay } = useGlobal();

  const FetchingDish = async () => {
    const response = await fetch("http://localhost:3004/dish");
    const data = await response.json();
    setDish(data);
  };

  useEffect(() => {
    console.log("Fetching Dishes");
    FetchingDish();
    console.log("Fetching End");
  }, []);

  return (
    <>
      <div className="p-2 flex flex-col bg-white rounded-2xl divide-solid shadow-md">
        <div className="divide-y">
          <LayoutBill title="Total Bill" billAmount={state.amount} />
          <LayoutBill title="Left to Pay" billAmount={toPay} />
        </div>
        {dish.map((dish) => {
          return (
            <div key={dish.id}>
              <LayoutDish
                name={dish.name}
                quantity={dish.quantity}
                image={dish.image}
                specs={dish.specs}
                extraSpecs={dish.extraSpecs}
                price={dish.price}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

function q(uno, dos, ...spread) {
  const a = [1, 2, 3];
  return spread;
}

q(1, 2, 3, 4, 5);
