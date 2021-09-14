import { 
    GET_VIDEOGAMES,
    FILTER_VIDEOGAMES_GENRE,
    FILTER_CREATED,
    FILTER_RATING,
    FILTER_AS_DES,
    GET_BY_NAME,
    GET_BY_ID,
    GET_BY_GENRES,
    // POST 
} from './types'
//aceptar la data y enviar a un estado 
//Almacenr 👇🏻 la data inicial 
const dataInitial = {
    videogames: [],
    allVideogames: [],
    videogameId: [],
    genres: []
}


//reducer 
export default function videogameReducer (state = dataInitial, {type, payload}) {
    switch (type) {
        case GET_VIDEOGAMES:
            // console.log(payload.data);
            return {...state, 
                videogames: payload.data,
                allVideogames: payload.data
            }
        case FILTER_VIDEOGAMES_GENRE: 
            const allVideogames = state.videogames
            const filterVideogames = payload ===  'All' ? state.allVideogames : allVideogames.filter(el => el.genres.includes(payload)) 
            return {
                ...state,
                videogames: filterVideogames
            }
        case FILTER_CREATED: 
            const allVideogamesC = state.videogames
            const createdFilter = payload === 'Created' ? allVideogamesC.filter(el => el.createdInDb) : allVideogamesC.filter(el => !el.createdInDb)
            return {
                ...state,
                videogames: payload === 'All' ? state.allVideogames : createdFilter
            }
        case FILTER_RATING: 
            const allVideogamesR = state.videogames;
            // console.log(allVideogamesR);
            const sortedRating = payload === 'TheBestR' ?  allVideogamesR.sort((prev, next) => {
                if(Math.floor(prev.rating) > Math.floor(next.rating)) return -1
                if(Math.floor(prev.rating) < Math.floor(next.rating)) return 1
                return 0
            }) : allVideogamesR.sort((prev, next) => {
                if(Math.floor(prev.rating) > Math.floor(next.rating)) return 1
                if(Math.floor(prev.rating) < Math.floor(next.rating)) return -1
                return 0
            })
            
            console.log(sortedRating);
            // state.allVideogamesR : allVideogamesR.filter(el => Math.floor(el.rating) === parseInt(payload, 10))
            return  {
                ...state,
                videogames: sortedRating
            }
            
        case FILTER_AS_DES: 
            // console.log(payload);
            const sortedArr = payload === 'Asc' ? state.videogames.sort((prev, next) => {
                if(prev.name.toLocaleLowerCase() > next.name.toLocaleLowerCase()) return 1
                if(prev.name.toLocaleLowerCase() < next.name.toLocaleLowerCase()) return -1
                return 0
            }) : state.videogames.sort((prev, next) => {
                if(prev.name.toLocaleLowerCase() > next.name.toLocaleLowerCase()) return -1
                if(prev.name.toLocaleLowerCase() < next.name.toLocaleLowerCase()) return 1
                return 0
            })
            // console.log(sortedArr);
            return{
                ...state,
                videogames: sortedArr
            }
        case GET_BY_NAME: 
            // console.log(payload)
            return {
                ...state,
                videogames: payload
            }   
        case GET_BY_ID: 
            // console.log(payload)
            return {
                ...state,
                videogameId: payload
            }   
        case GET_BY_GENRES: 
            // console.log(payload)
            return {
                ...state,
                genres: payload
            }   
    
        default:
            return state
    }
}


