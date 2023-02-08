import React, { useContext } from "react";
import "../styles/Country.css";
import { MapContext } from "../context/MapContext";
function Country() {
  let temperatura = useContext(MapContext);
  function getTemp(tempe) {
    console.log(tempe);
  }
  getTemp(temperatura);
  return (
    <div className="country-description">
      <h2 className="country-description__city">
        {temperatura.city === null ? "Ciudad" : temperatura.city[0]}
      </h2>
      <h3 className="country-description__weather">Weather</h3>
      <p className="country-description__clouds">
        <span>{temperatura.city === null ? "Main" : temperatura.city[1]}</span>
        {
          temperatura.city===null?<span>No image</span>:<img
          src={`http://openweathermap.org/img/wn/${temperatura.city[2]}.png`}
          alt="temperature icon"
        />
        }
        
      </p>
      <p className="country-description__description">
        {temperatura.city === null ? "Load Description" : temperatura.city[3]}
      </p>
      <h3 className="country-description__temperature">Temperatura</h3>
      <p className="country-description__temperature-actual">
        {temperatura.city === null ? "Now" : temperatura.city[4]}
      </p>
      <p className="country-description__temperature-min">
        Minimo:{temperatura.city === null ? "Max" : temperatura.city[5]}
      </p>
      <p className="country-description__temperature-max">
        Maximo:{temperatura.city === null ? "Min" : temperatura.city[6]}
      </p>
    </div>
  );
}

export default Country;
