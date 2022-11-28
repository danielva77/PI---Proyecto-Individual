import React from "react";
import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
//import { GET_ALL_VIDEOGAMES } from "../../actions";
import { Link } from "react-router-dom";
import { getAllVideogames, filterVideogamesByGenre, filterCreated, OrderByName, OrderByRating } from "../../actions";
import Card from "../Card/Card";
import Paginado from "../Paginado/Paginado";
import SearchBar from "../SearchBar/searchBar";


export default function Home() {
  const dispatch = useDispatch();
  const allVideogames = useSelector(state => state.videogames);
//Paginado
  const [currentPage, setCurrentPage] = useState(1);  //pag actual
  const [videogamesPerPage, setVideogamesPerPage] = useState(15);
  const [orden, setOrden] = useState("");
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
    e.preventDefault();
    dispatch(getAllVideogames());
  };

  function handleFilterByGenre(e){
    dispatch(filterVideogamesByGenre(e.target.value))
  };

  function handleFilterCreated(e){
    dispatch(filterCreated(e.target.value))
  };

  function handleSort(e){
    e.preventDefault();
    dispatch(OrderByName(e.target.value))
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`)
  }
  function handleSortRating(e){
    e.preventDefault();
    dispatch(OrderByRating(e.target.value))
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`)
  }

  return (
    <div>
      <Link to="/videogames">Carga tu propio Juego</Link>
      <h1>VIDEOGAMES</h1>
      <button onClick={e =>{handleClick(e)}}>Volver a cargar todo</button>

      <Paginado 
      videogamesPerPage = {videogamesPerPage}
      allVideogames = {allVideogames.length}
      paginado = {paginado}
      />

      <SearchBar />

      <div>
        <select onChange={e =>{handleFilterByGenre(e)}}>
          <option value="all">Todos</option>
          <option value="Action">Accion</option>
          <option value="Adventure">Aventura</option>
          <option value="Indie">Indie</option>
          <option value="RPG">RPG</option>
          <option value="Strategy">Estrategia</option>
          <option value="Shooter">Disparos</option>
          <option value="Casual">Casual</option>
          <option value="Simulation">Simulacion</option>
          <option value="Puzzle">Puzzle</option>
          <option value="Arcade">Arcade</option>
          <option value="Platformer">Plataformas</option>
          <option value="Racing">Carreras</option>
          <option value="Massively Multiplayer">Multijugador</option>
          <option value="Sports">Deportes</option>
          <option value="Fighting">Pelea</option>
          <option value="Family">Familia</option>
          <option value="Board Games">Juegos de mesa</option>
          <option value="Educational">Educacional</option>
        </select>
        <select onChange={e =>{handleFilterCreated(e)}}> Filtrar
          <option value="all">Todos</option>
          <option value="existente">existente</option>
          <option value="creado">creado</option>
        </select>
        <select onChange={e =>{handleSort(e)}}> 
          <option disabled selected>Ordenar por nombre</option>
          <option value="ascendente">Ascendente A-Z</option>
          <option value="descendente">Descendente Z-A</option>
        </select>
        <select onChange={e =>{handleSortRating(e)}}> 
          <option disabled selected>Ordenar por rating</option>
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