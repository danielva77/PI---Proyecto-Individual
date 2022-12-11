import React from "react";
import Styles from "../Paginado/Paginado.module.css";

export default function Paginado({videogamesPerPage, allVideogames, paginado}){
  let pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allVideogames/videogamesPerPage); i++) {
    pageNumbers.push(i);
  }
  return(
    <div className={Styles.div1}>
      <ul>
        {
          pageNumbers && 
          pageNumbers.map(number => {return(
           
          
            <button className={Styles.button} key={number} onClick={() => paginado(number)}>{number}</button>
           
          )})
        }
      </ul>

    </div>
  )
}