import React from "react";
import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
//import { GET_ALL_VIDEOGAMES } from "../../actions";
import { Link } from "react-router-dom";
import { getAllVideogames } from "../../actions";
import Card from "../Card/Card";


export default function Home() {
  const dispatch = useDispatch();
  const allVideogames = useSelector(state => state.videogames);

  useEffect(() =>{
    dispatch(getAllVideogames());
  }, [dispatch]);

  function handleClick(e){
    e.preventDefaukt();
    dispatch(getAllVideogames());
  }

  return (
    <div>
      <Link to="/videogames">Juegos</Link>
      <h1>VIDEOGAMES</h1>
      <button onClick={e =>{handleClick(e)}}>Volver a cargar todo</button>

      <div>
        <select> Filtrar
          <option>genero</option>
          <option>existente</option>
          <option>creado</option>
        </select>
        <select> Ordenar
          <option>Ascendente A-Z</option>
          <option>Descendente Z-A</option>
          <option>Mayor rating</option>
          <option>Menor rating</option>
        </select>
      </div>

      <div>
        {
        allVideogames?.map((el) => {
          return(  
            <Link to={"/Home/"+el.id}>
            <Card 
              name = {el.name}
              image ={el.image}
              released ={el.released}
              genres = {el.genres}/>
            </Link>
          )
        })
        }
      </div>

    </div>

  )
}