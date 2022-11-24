import axios from 'axios';

//----------------------------------------------------
export const GET_ALL_VIDEOGAMES = "GET_ALL_VIDEOGAMES";
export const FILTER_BY_GENRE = "FILTER_BY_GENRE";
export const FILTER_CREATED = "FILTER_CREATED";

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

