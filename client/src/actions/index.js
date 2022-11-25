import axios from 'axios';

//----------------------------------------------------
export const GET_ALL_VIDEOGAMES = "GET_ALL_VIDEOGAMES";
export const FILTER_BY_GENRE = "FILTER_BY_GENRE";
export const FILTER_CREATED = "FILTER_CREATED";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_RATING = "ORDER_BY_RATING";
export const GET_NAME_VIDEOGAME = "GET_NAME_VIDEOGAME";

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
      let json = await axios.get("http://localhost:3000/videogames?name="+name);
      return({
        type: "GET_NAME_VIDEOGAME",
        payload: json.data,
      })
    } catch (error) {
        console.log(error)
    };
  };
};
