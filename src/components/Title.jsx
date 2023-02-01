import React from 'react'
import '../styles/Title.css'
import { BsCloud,BsFillHouseDoorFill} from "react-icons/bs";
function Title() {
  return (
    <header className='header-peruvian'>
        <h2> <BsCloud /> Find My Peruvian City Weather <BsCloud/></h2>
        <h2 > <a href='#' className='header-peruvian__return'>Return to portafolio <BsFillHouseDoorFill /> </a> </h2>
    </header>
  )
}

export default Title