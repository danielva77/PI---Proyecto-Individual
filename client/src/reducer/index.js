
import{
    GET_ALL_VIDEOGAMES,
    FILTER_BY_GENRE
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
      default:
        return state;
  };
};

