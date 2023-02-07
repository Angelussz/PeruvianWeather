import React, { useContext, useEffect } from 'react'
import '../styles/Country.css'
import { MapContext } from '../context/MapContext'
function Country() {
    
    let temperatura = useContext(MapContext)
    function getTemp(tempe){
        console.log(tempe)
    }
    getTemp(temperatura)
  return (
    
    <div className='country-description'>
        
        <h2 className='country-description__city' >{temperatura.city === ""?"Ciudad":temperatura.city}</h2>
        <h3 className='country-description__weather'>Weather</h3>
        <p className='country-description__clouds'>{temperatura.wmain === ""?"Main":temperatura.wmain} <span>{temperatura.wicon === ""?"Icon":`http://openweathermap.org/img/wn/${temperatura.wicon}@2x.png`}</span></p>
        <p className='country-description__description' >{temperatura.wdescription === ""?"Load Description":temperatura.wdescription}</p>
        <h3 className='country-description__temperature'>Temperatura</h3>
        <p className='country-description__temperature-actual'>{temperatura.tempActual === ""?"Now":temperatura.tempActual}</p>
        <p className='country-description__temperature-min'>Minimo:{temperatura.tempMin === ""?"Max":temperatura.tempMin} </p>
        <p className='country-description__temperature-max' >Maximo:{temperatura.tempMax === ""?"Min":temperatura.tempMax} </p>
    </div>
  )
}

export default Country