import axios from 'axios';

//----------------------------------------------------
export const GET_ALL_VIDEOGAMES = "GET_ALL_VIDEOGAMES"

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

