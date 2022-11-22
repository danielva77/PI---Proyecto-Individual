import React from "react";

export default function Paginado({videogamesPerPage, allVideogames, paginado}){
  let pageNumbers = [];

  for (let i = 0; i <= Math.ceil(allVideogames/videogamesPerPage); i++) {
    pageNumbers.push(i+1);
  }
  console.log(videogamesPerPage);
  return(
    <div>
      <ul>
        {
          pageNumbers && 
          pageNumbers.map(number => {return(
           // <li key={number}>
            <button key={number} onClick={() => paginado(number)}>{number}</button>
           // </li>
          )})
        }
      </ul>

    </div>
  )
}