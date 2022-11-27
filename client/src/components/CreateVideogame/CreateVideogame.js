import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getGenre, getPlatform } from "../../actions";

export default function CreateVideogame(){
    const dispatch = useDispatch();
    const genres = useSelector(state => state.genres);

    const [input, setInput] = useState({
        name : " ",
        description : " ",
        released : " ",
        image : " ",
        rating : 0,
        platform : [], 
        genres : []
    });


    useEffect(() =>{
        dispatch(getGenre())}, []);

        useEffect(() =>{
          dispatch(getPlatform())}, []);
        const platforms = useSelector(state => state.platforms);

  
  return(
    <div>
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
          <input type="text" value={input.name} name="name"/>
          </div>

          <div>
          <label>Descripción:</label>
          <input type="text" value={input.description} name="description"/>
          </div>

          <div>
          <label>Publicado:</label>
          <input type="text" value={input.released} name="released "/>
          </div>

          <div>
          <label>Imagen:</label>
          <input type="text" value={input.image} name="image"/>
          </div>

          <div>
          <label>Rating:</label>
          <input type="number" value={input.rating} name="rating"/>
          </div>

          <label>Plataforma:</label>
          {platforms.map((e) =>{
            return(<label><input type="checkbox" name={e.name} value={e.name}/>{e.name}</label>)
          })}

          <div>
          <label>Generos:</label>
          <select>
            {genres.map((genero) =>
              {return(
                <option value={genero.name} name={genero.name}>{genero.name}</option>
              )}
            )}
          </select>
          </div>

          <div>
            <button type="submit">Cargar</button>
              <Link to="/Home">
              <button>Cancelar</button>
              </Link>
          </div>
          
        </div>
      </form>




    </div>
  )


}


