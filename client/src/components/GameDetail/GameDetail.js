import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail } from '../../actions';

export default function Detail(props){

const dispatch = useDispatch();

useEffect(() =>{
  dispatch(getDetail(props.match.params.id))
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [dispatch]);

// El id del creado esta como string

let myGame = useSelector((state) => state.detail);
return(
  <div>
    {
      myGame.length > 0 ?
      <div>
        <h1>{myGame[0].name}</h1>
        <img src={myGame[0].image} alt="img"></img>
        <p>Generos: {myGame[0].genres ? myGame[0].genres : myGame[0].Generos.map(e => e.name).join(', ')}</p>

        {/* <p>Descripcion: {myGame[0].description}</p> // me falta traer */}
        <p>Fecha de Lanzamiento: {myGame[0].released} </p>
        <p>Rating: {myGame[0].rating}</p>
        <p>Plataformas: {myGame[0].platforms ? myGame[0].platforms.join(", ") : myGame[0].Plataforms.map(e => e.name).join(", ")} </p>
      </div> : <img src="https://media2.giphy.com/media/VseXvvxwowwCc/giphy.gif?cid=790b7611e620fe8638d1818e9c0588323836c9d62acdc114&rid=giphy.gif&ct=g" alt="Cargando ..."/>
    }
    <div>
      <Link to="/Home">
        <button>Volver</button>
      </Link>
    </div>
  </div>
)



}