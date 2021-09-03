import axios from 'axios'
import { 
    GET_VIDEOGAMES,
    FILTER_VIDEOGAMES_GENRE,
    FILTER_CREATED,
    FILTER_RATING,
    FILTER_AS_DES
 } from './types'
//consumir api
//acciones

export const getVideogames = () => async (dispatch, getState) => {
    try {
        const res = await axios.get('http://localhost:3001/videogames')
        // console.log(res);
        dispatch({
            type: GET_VIDEOGAMES,
            payload: res
        })
    } catch (error) {
        console.log(error);
    }
}

export const filterVideogamesByGenre = (payload) => (dispatch) => {
    dispatch({
        type: FILTER_VIDEOGAMES_GENRE,
        payload
    })
}

export const filterCreated = (payload) => (dispatch) => {
    dispatch({
        type: FILTER_CREATED,
        payload
    })
}

export const filterRating = (payload) => (dispatch) => {
    dispatch({
        type: FILTER_RATING,
        payload
    })
}
export const filterAsDes = (payload) => (dispatch) => {
    // console.log('pay', payload);
    dispatch({
        type: FILTER_AS_DES,
        payload
    })
}