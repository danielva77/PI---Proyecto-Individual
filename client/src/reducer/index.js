
import{
    GET_ALL_VIDEOGAMES,
    FILTER_BY_GENRE,
    FILTER_CREATED,
    ORDER_BY_NAME,
    ORDER_BY_RATING
} from "../actions/index";

const initialState = {
    videogames: [],
    allVideogames: [],
    videogamesFiltered: []
}
export default function rootReducer(state=initialState, action){
  switch (action.type) {
    case GET_ALL_VIDEOGAMES:
      return {
				...state,
				videogames: action.payload,
        allVideogames: action.payload,
        videogamesFiltered: action.payload,
			};
    case FILTER_BY_GENRE:
      const allVideogames = state.allVideogames;
      const genreFilter = action.payload === "All" ? allVideogames :
          allVideogames.filter(e => e.genres.includes(action.payload));
      return{
        ...state,
        videogames: genreFilter,//ver
        //videogamesFiltered: genreFilter,
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
        // videogamesFiltered: action.payload === "all" ? allVideogames2 :
        //   createdFilter,
      }
    
    case ORDER_BY_NAME:
      let orderName = action.payload === "ascendente" ?
        state.videogames.sort(function(a,b){
          if (a.name > b.name){return 1};
          if (b.name > a.name){return -1};
          return 0;
        }) :
        state.videogames.sort(function(a,b){
          if (a.name < b.name){return 1};
          if (b.name < a.name){return -1};
          return 0;
        })
        return{
          ...state,
          videogames: orderName,
        }


          default:
            return state;
  };
};

