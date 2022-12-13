import React from "react";
import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { Link } from "react-router-dom";
import { getAllVideogames, filterVideogamesByGenre, filterCreated, OrderByName, OrderByRating } from "../../actions";
import Card from "../Card/Card";
import Paginado from "../Paginado/Paginado";
import SearchBar from "../SearchBar/searchBar";
import Footer from "../Footer/Footer";
import Styles from "../Home/Home.module.css";
import Loader from "../Cargando/Cargando";


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


  function handleFilterByGenre(e){
    e.preventDefault();
    if(e.target.value === 'all') {
      dispatch(getAllVideogames())
  } else {
    dispatch(filterVideogamesByGenre(e.target.value))}
  };

  function handleFilterCreated(e){
    if(e.target.value === "all"){
      dispatch(getAllVideogames())
    }else{
    dispatch(filterCreated(e.target.value))}
    setCurrentPage(1)
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
  function handleLoad(e){
    dispatch(getAllVideogames())
  }

  return (
    <div className={Styles.body}>
{/* ************* NAVBAR**************************** */}      
      <div className={Styles.nav}>

        <div className={Styles.ordenfiltro}><Link to="/"><button className={Styles.linknav}>Inicio 🏠</button></Link></div>
        <div className={Styles.ordenfiltro}><button className={Styles.linknav} onClick={(e) =>{handleLoad(e)}}>Recargar 🔅</button></div>
        <div className={Styles.ordenfiltro}><SearchBar /></div>
        <div className={Styles.ordenfiltro}><Link className={Styles.Addvideogame} to="/videogames"><strong className={Styles.Addvideogame} >⭐ Agregar videojuego ⭐</strong></Link></div>
      </div>
      
{/* ************* ------**************************** */} 

{/* ************* FILTROS Y ORDEN **************************** */}
      <div className={Styles.filtros}>
        <div className={Styles.ordenfiltro}>
          <p><strong>Filtrar por Genero</strong></p>
          <select className={Styles.filtersformat} onChange={e =>{handleFilterByGenre(e)}}>
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
          <p><strong>Filtrar por tipo</strong></p>
          <select className={Styles.filtersformat} onChange={e =>{handleFilterCreated(e)}}> Filtrar
            <option value="all">Todos</option>
            <option value="existente">Existentes</option>
            <option value="creado">Creados</option>
          </select>
        </div>
        <div className={Styles.ordenfiltro}>
          <p><strong>Ordenar por nombre</strong></p>
          <select className={Styles.filtersformat} onChange={e =>{handleSort(e)}}> 
            <option disabled selected>Ordenar por nombre</option>
            <option value="ascendente">Ascendente A-Z</option>
            <option value="descendente">Descendente Z-A</option>
          </select>
        </div>
        <div className={Styles.ordenfiltro}>
          <p><strong>Ordenar por rating</strong></p>
          <select className={Styles.filtersformat} onChange={e =>{handleSortRating(e)}}> 
            <option disabled selected>Ordenar por rating</option>
            <option value="mayor">Menor rating</option>
            <option value="menor">Mayor rating</option>
          </select>
        </div>
      </div>
{/* ************* ----------------**************************** */}
{/* ************* PAGINADO **************************** */}
<div className={Styles.paginado}>
        <Paginado 
        videogamesPerPage = {videogamesPerPage}
        allVideogames = {allVideogames.length}
        paginado = {paginado}
        />
      </div>
<div className={Styles.pagenumber}><p className={Styles.pagetext}>Page -{currentPage}-</p></div>

{/* ************* -------- **************************** */}

      <div  className={Styles.container}>
        {
          currentVideogames.length === 0 ? (
            <Loader />
          ) :
        currentVideogames?.map((el) => {
          let genero = el.genres ? el.genres : el.Generos.map(e => e.name).join(", ");
    
          return( 
            <div>
              <Link className={Styles.Addvideogame} to={"/videogame/"+el.id}>
                <div>
                  <div className={Styles.card}>
                    <Card 
                      id={el.id}
                      name = {el.name}
                      image ={el.image}
                      released ={el.released}
                      rating ={el.rating}
                      genres = {genero}
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