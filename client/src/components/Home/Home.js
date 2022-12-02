import React from "react";
import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
//import { GET_ALL_VIDEOGAMES } from "../../actions";
import { Link } from "react-router-dom";
import { getAllVideogames, filterVideogamesByGenre, filterCreated, OrderByName, OrderByRating } from "../../actions";
import Card from "../Card/Card";
import Paginado from "../Paginado/Paginado";
import SearchBar from "../SearchBar/searchBar";
import Footer from "../Footer/Footer";
import Styles from "../Home/Home.module.css"


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


  console.log("a ver", currentVideogames)

  useEffect(() =>{
    dispatch(getAllVideogames());
  }, [dispatch]);


  // FUNCION QUE TRAE TODOS LOS JUEGOS AL HACER CLICK
  // function handleClick(e){
  //   e.preventDefault();
  //   dispatch(getAllVideogames());
  // };

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
    <div className={Styles.body}>
{/* ************* NAVBAR**************************** */}      
      <div className={Styles.nav}>

        <div className={Styles.ordenfiltro}><Link to="/"><h1 className={Styles.linknav}>Home 🏠</h1></Link></div>
        <div className={Styles.ordenfiltro}><h1 className={Styles.linknav}><a href="#Footer">About 📨</a></h1></div>
        <div className={Styles.ordenfiltro}><SearchBar /></div>
      </div>
{/* ************* ------**************************** */} 

      <Link to="/videogames">Carga tu propio Juego</Link>
      {/* <div>
      <button onClick={e =>{handleClick(e)}}>Volver a cargar todo</button></div> */}
{/* ************* PAGINADO **************************** */}
      <div className={Styles.paginado}>
        <Paginado 
        videogamesPerPage = {videogamesPerPage}
        allVideogames = {allVideogames.length}
        paginado = {paginado}
        />
      </div>
{/* ************* -------- **************************** */}


{/* ************* FILTROS Y ORDEN **************************** */}
      <div className={Styles.filtros}>
        <div className={Styles.ordenfiltro}>
          <p>Filtrar por Genero</p>
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
        </div>
        <div className={Styles.ordenfiltro}>
          <p>Filtrar por tipo</p>
          <select onChange={e =>{handleFilterCreated(e)}}> Filtrar
            <option value="all">Todos</option>
            <option value="existente">existente</option>
            <option value="creado">creado</option>
          </select>
        </div>
        <div className={Styles.ordenfiltro}>
          <p>Ordenar por nombre</p>
          <select onChange={e =>{handleSort(e)}}> 
            <option disabled selected>Ordenar por nombre</option>
            <option value="ascendente">Ascendente A-Z</option>
            <option value="descendente">Descendente Z-A</option>
          </select>
        </div>
        <div className={Styles.ordenfiltro}>
          <p>Ordenar por rating</p>
          <select onChange={e =>{handleSortRating(e)}}> 
            <option disabled selected>Ordenar por rating</option>
            <option value="mayor">Menor rating</option>
            <option value="menor">Mayor rating</option>
          </select>
        </div>
      </div>
{/* ************* ----------------**************************** */}
      <div  className={Styles.container}>
        {

        currentVideogames?.map((el) => {
          return( 
            <div>
              <Link to={"/videogame/"+el.id}>
                <div>
                  <div className={Styles.card}>
                    <Card 
                      id={el.id}
                      name = {el.name}
                      image ={el.image}
                      released ={el.released}
                      rating ={el.rating}
                      genres = {el.genres}
                      key ={el.id}/>
                      
                  </div>
                </div>
              </Link>
            </div>
          )
        })
        }
      </div>
    <div id="Footer">
      <Footer />
    </div>
    </div>


  )
}