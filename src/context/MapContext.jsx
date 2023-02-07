import React, { createContext } from "react";
import Map from "../components/Map";
import Country from "../components/Country";
import '../styles/MapContext.css'
export const MapContext = createContext();

export function MapContextProvider(props) {
  let city_temp = {
    city:"",
    wmain:"",
    wicon: "",
    wdescription:"",
    tempActual:0,
    tempMin:0,
    tempMax:0

  }
  return (
    <MapContext.Provider value={city_temp}>
      <div className="provider-container">
        <Map />
        {city_temp.city !== "" ? <Country/>:""}
      </div>
    </MapContext.Provider>
  );
}
