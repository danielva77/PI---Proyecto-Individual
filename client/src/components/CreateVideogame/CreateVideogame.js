import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getGenre, getPlatform, postVideogame } from "../../actions";
import Styles from "./Create.module.css";

function validate(input){
  let errors = {}
  if(!input.name) errors.name = "Ingrese un nombre"
  if(!input.description) errors.description = "El juego debe tener una descripción"
  if(!input.rating || input.rating < 1 || input.rating > 5) errors.rating = "El rating debe ser entre 1 a 5"
  if(!input.released) errors.released = "Debe tener fecha de lanzamiento"
  if(!input.platforms.length) errors.platforms = "Ingrese las plataformas del videojuego"
  if(!input.genres.length) errors.genres = "Ingrese llos generos del videojuego" 
  return errors;
}



export default function CreateVideogame(){
    const dispatch = useDispatch();
    const genres = useSelector(state => state.genres);

    const history = useHistory()

    const [input, setInput] = useState({
        name : " ",
        description : " ",
        released : " ",
        image : " ",
        rating : 0,
        platforms : [], 
        genres : []
    });

    const [errors, setErrors] = useState({})


    useEffect(() =>{
        dispatch(getGenre())
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

        useEffect(() =>{
          dispatch(getPlatform())
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
        const platform = useSelector(state => state.platforms);


//******Funciones************
function handleChange(e){
  setErrors(validate({
    ...input,
    [e.target.name]: e.target.value
  }))

  setInput({
    ...input,
    [e.target.name] : e.target.value,
  })
}

function handleCheck(e){
  if(e.target.checked){
    setInput({
      ...input,
      platforms: [...input.platforms, e.target.value]
    })
  }
}

function handleSelect(e){
  setInput({
    ...input,
    genres: [...input.genres, e.target.value]
  })
}

function handleSubmit(e){
  e.preventDefault();
  console.log(input);
  dispatch(postVideogame(input));
  alert("Juego cargado con éxito");
  setInput({
    name : " ",
    description : " ",
    released : " ",
    image : " ",
    rating : 0,
    platforms : [], 
    genres : []
  });
  history.push("/Home");
} 

function handleDelete(el){
  setInput({
    ...input,
    genres: input.genres.filter(g => g !==el)
  })
}
//***************************
  
  return(
    <div className={Styles.container}>
      <div>
      <Link to="/Home">
        <button>Volver</button>
      </Link>
      </div>

      <div><h1>Cargá tu videogame!</h1></div>

      <form>
        <div>
          <div>
          <label>Nombre:</label>
          <input type="text" value={input.name} name="name" onChange={(e) =>{handleChange(e)}}/>
          </div>

          <div>
          <label>Descripción:</label>
          <input type="text" value={input.description} name="description" onChange={(e) =>{handleChange(e)}}/>
          </div>

          <div>
          <label>Publicado:</label>
          <input type="text" value={input.released} name="released" onChange={(e) =>{handleChange(e)}}/>
          </div>

          <div>
          <label>Imagen:</label>
          <input type="text" value={input.image} name="image" onChange={(e) =>{handleChange(e)}}/>
          </div>

          <div>
          <label>Rating:</label>
          <input type="number" value={input.rating} name="rating" onChange={(e) =>{handleChange(e)}}/>
          </div>

          <label>Plataforma:</label>
          {platform.map((e) =>{
            return(<label><input type="checkbox" name={e.name} value={e.name} onChange={(e) =>{handleCheck(e)}}/>{e.name}</label>)
          })}

          <div>
          <label>Generos:</label>
          <select onChange={(e) =>{handleSelect(e)}}>
            {genres.map((genero) =>
              {return(
                <option value={genero.name} name={genero.name}>{genero.name}</option>
              )}
            )}
          </select>
          </div>

          <div>
            <button type="submit" onClick={(e) =>{handleSubmit(e)}}>Cargar</button>
              <Link to="/Home">
              <button>Cancelar</button>
              </Link>
          </div>
          
        </div>
      </form>
          {
            input.genres.map(el => 
              <div>
                <button onClick={e =>{handleDelete(el)}}>x</button>
                <p>{el}</p>

              </div>)
          }



    </div>
  )
}


