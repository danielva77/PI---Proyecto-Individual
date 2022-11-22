import React from "react";
import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
//import { GET_ALL_VIDEOGAMES } from "../../actions";
import { Link } from "react-router-dom";
import { getAllVideogames } from "../../actions";
import Card from "../Card/Card";
import Paginado from "../Paginado/Paginado";


export default function Home() {
  const dispatch = useDispatch();
  const allVideogames = useSelector(state => state.videogames);
//Paginado
  const [currentPage, setCurrentPage] = useState(1);  //pag actual
  const [videogamesPerPage, setVideogamesPerPage] = useState(15);
  const indexOfLastVideogame = currentPage * videogamesPerPage;
  const indexOfFirstVideogame = indexOfLastVideogame - videogamesPerPage;
  const currentVideogames = allVideogames.slice(indexOfFirstVideogame , indexOfLastVideogame);

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };




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

      <Paginado 
      videogamesPerPage = {videogamesPerPage}
      allVideogames = {allVideogames.length}
      paginado = {paginado}
      />

      <div>
        <select> Filtrar
          <option value="genero">genero</option>
          <option value="existente">existente</option>
          <option value="creado">creado</option>
        </select>
        <select> Ordenar
          <option value="asc">Ascendente A-Z</option>
          <option value="desc">Descendente Z-A</option>
          <option value="mayor">Mayor rating</option>
          <option value="menor">Menor rating</option>
        </select>
      </div>

      <div>
        {
        currentVideogames?.map((el) => {
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