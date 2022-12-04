import axios from 'axios';

//----------------------------------------------------
export const GET_ALL_VIDEOGAMES = "GET_ALL_VIDEOGAMES";
export const FILTER_BY_GENRE = "FILTER_BY_GENRE";
export const FILTER_CREATED = "FILTER_CREATED";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_RATING = "ORDER_BY_RATING";
export const GET_NAME_VIDEOGAME = "GET_NAME_VIDEOGAME";
export const GET_GENRES = "GET_GENRES";
export const POST_VIDEOGAMES = "POST_VIDEOGAMES";
export const GET_PLATFORMS = "GET_PLATFORMS";
export const GET_DETAIL = "GET_DETAIL";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
//----------------------------------------------------

export function getAllVideogames(){
  return async function(dispatch){
    var json = await axios.get("http://localhost:3001/videogames");

    return dispatch({
      type: "GET_ALL_VIDEOGAMES",
      payload: json.data,
    });
  };
};

export function filterVideogamesByGenre(payload){
  return{
    type: "FILTER_BY_GENRE",
    payload,
  };
};

export function filterCreated(payload){
  return{
    type: "FILTER_CREATED",
    payload,
  };
};

export function OrderByName(payload){
  return{
    type: "ORDER_BY_NAME",
    payload,
  };
};

export function OrderByRating(payload){
  return{
    type: "ORDER_BY_RATING",
    payload,
  };
};

export function getNameVideogames(name){
  return async function(dispatch){
    try {
      let json = await axios.get("http://localhost:3001/videogames?name="+name);
      return dispatch({
        type: "GET_NAME_VIDEOGAME",
        payload: json.data,
      })
    } catch (error) {
        console.log(error)
        console.log("prueba error obtener name de juego")
        alert("No hay juegos cargados con ese nombre")
    };
  };
};

export function getGenre(){
  return async function(dispatch){
    let generos = await axios.get("http://localhost:3001/genres")
    
    return dispatch({
      type: "GET_GENRES",
      payload: generos.data,
    });
  };
};

export function postVideogame(payload){
  return async function(dispatch){
    const response = await axios.post("http://localhost:3001/videogames", payload);

    return dispatch({
      type: "POST_VIDEOGAMES",
			payload: response.data,
    })
  }
}

export function getPlatform(){
  return async function(dispatch){
    let plataformas = await axios.get("http://localhost:3001/platforms")
    
    return dispatch({
      type: "GET_PLATFORMS",
      payload: plataformas.data,
    });
  };
};

export const getDetail = (id) => {
  return async function (dispatch) {
      const response = await axios.get(
          `http://localhost:3001/videogame/${id}`
      )

      return dispatch({
          type: GET_DETAIL,
          payload: response.data
      })
  }
}

export function cleanDetail(){
  return{
      type: 'CLEAN_DETAIL'
  }
}