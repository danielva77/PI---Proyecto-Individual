
import{
    GET_ALL_VIDEOGAMES,
    FILTER_BY_GENRE,
    FILTER_CREATED
} from "../actions/index";

const initialState = {
    videogames: [],
    allVideogames: [],
}
export default function rootReducer(state=initialState, action){
  switch (action.type) {
    case GET_ALL_VIDEOGAMES:
      return {
				...state,
				videogames: action.payload,
        allVideogames: action.payload,
			};
    case FILTER_BY_GENRE:
      const allVideogames = state.allVideogames;
      const genreFilter = action.payload === "All" ? allVideogames :
          allVideogames.filter(e => e.genres.includes(action.payload));
      return{
        ...state,
        videogames: genreFilter,
      }
    case FILTER_CREATED:
      const allVideogames2 = state.allVideogames;
      const createdFilter = action.payload === "creado" ?
          allVideogames2.filter(e => (e.id.length>10)) : //mejorar la logica del ID.
          allVideogames2.filter(e => (e.id.length<10));
      return{
        ...state,
        videogames: action.payload === "all" ? allVideogames2 :
          createdFilter,
      }


          default:
            return state;
  };
};

