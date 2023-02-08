import React, { createContext, useState } from "react";
import Map from "../components/Map";
import Country from "../components/Country";
import '../styles/MapContext.css'
export const MapContext = createContext();

export function MapContextProvider(props) {
  const [city, setCity] = useState(null)
  return (
    <MapContext.Provider value={{
      setCity,
      city
    } 
    }>
      <div className="provider-container">
        {props.children}
      </div>
    </MapContext.Provider>
  );
}
