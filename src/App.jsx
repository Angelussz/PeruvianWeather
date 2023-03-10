import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Map from "./components/Map";
import Title from "./components/Title";
import { MapContextProvider } from "./context/MapContext";
import Country from "./components/Country";
import "./App.css";

function App() {
  const game = (cityID) => {
    var key = "08636e97c09aac5a36222a5cc7d825eb";
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?id=" +
        cityID +
        "&appid=" +
        key +"&units=metric"
    )
      .then(function (resp) {
        return resp.json();
      }) // Convert data to json
      .then(function (data) {
        console.log(data);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <Title />
      <MapContextProvider>
        <Map />
        <Country />
      </MapContextProvider> 
      <nav>
        Derechos Reservados @Angelo Perez Rodriguez 
      </nav>
    </div>
    
  );
}

export default App;
