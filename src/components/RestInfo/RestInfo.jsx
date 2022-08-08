import React, { useEffect } from "react";
import { StarIcon, LocationMarkerIcon } from "@heroicons/react/outline";

// TODO
/**
 * controlar errores (try catch - solo con async await)
 * controlar errores con promises
 * poner la informacion de restaurantes - estilos
 * idle, in progress, done, error (patron de diseno => state machine)
 * ESTUDIAR:
 * rutas, tratar de hacer unas rutas publicas y privadas.
 **/

export const RestInfo = () => {
  const [restaurant, setRestaurant] = React.useState({});

  const Fetching = async () => {
    try {
      const response = await fetch("http://localhost:3004/restaurant");
      const data = await response.json();
      setRestaurant(data);
    } catch (error) {
      console.log("error" + error);
    }
  };

  useEffect(() => {
    Fetching();
  }, []);

  return (
    <div className="flex p-2 rounded-xl items-center text-center bg-white space-x-1 overflow-hidden sm:justify-start justify-center">
      {/* Restaurant name and logo */}
      <div className="flex flex-col shrink-0">
        <img
          className="shrink-0 sm:h-20 sm:w-20  object-cover"
          src={require("../../utils/images/madrecafe.png")}
        />
        {/* <p className="text-sm">{restaurant.name} </p> */}
      </div>
      {/* endRestaurant name and logo */}
      {/* ----INFORMATION---- */}
      <div className="shrink-0 space-y-1">
        {/* Rating */}
        <div className="flex items-center space-x-1">
          <StarIcon className="h-5 w-5" />
          <p className="text-sm">{restaurant.rating}</p>
        </div>
        {/* endRating */}
        {/* Distance */}
        <div className="flex items-center space-x-1">
          <LocationMarkerIcon className="h-5 w-5" />
          <p className="text-sm">{restaurant.distance}</p>
        </div>
        {/* endDistance */}
        {/* Location */}
        <div className="flex flex-row space-x-1 bg-purple-100 ">
          <LocationMarkerIcon className="h-5 w-5" />
          <p className="text-sm ">{restaurant.location}</p>
        </div>
        {/* endLocation */}
      </div>
    </div>
  );
};
