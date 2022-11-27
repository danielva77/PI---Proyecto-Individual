
import{
    GET_ALL_VIDEOGAMES,
    FILTER_BY_GENRE,
    FILTER_CREATED,
    ORDER_BY_NAME,
    ORDER_BY_RATING,
    GET_NAME_VIDEOGAME,
    GET_GENRES,
    POST_VIDEOGAMES,
    GET_PLATFORMS
} from "../actions/index";

const initialState = {
    videogames: [],
    allVideogames: [],
    genres: [],
    platforms:[]
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
    case ORDER_BY_RATING:
      let orderRating = action.payload === "mayor" ?
      state.videogames.sort(function(a,b){
        if (a.rating > b.rating){return 1};
        if (b.rating > a.rating){return -1};
        return 0;
      }) :
      state.videogames.sort(function(a,b){
        if (a.rating < b.rating){return 1};
        if (b.rating < a.rating){return -1};
        return 0;
      })
      return{
        ...state,
        videogames: orderRating,
      }

    case GET_NAME_VIDEOGAME:
      return{
        ...state,
        videogames: action.payload,
      };

    case POST_VIDEOGAMES:
      return{
        ...state,
      }

    case GET_GENRES:
      return{
        ...state,
        genres: action.payload,
      }

    case GET_PLATFORMS:
      return{
        ...state,
        platforms: action.payload,
      }


          default:
            return state;
  };
};

