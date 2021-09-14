import axios from 'axios'
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
export const getByName = (name) => async (dispatch) => {

    try {
        const res = await axios.get(`http://localhost:3001/videogames?name=${name}`)
        // console.log(name);
        return dispatch({
            type: GET_BY_NAME,
            payload: res.data
        })
    } catch (error) {
        console.log(error);
    }
}
export const getById = (id) => async (dispatch) => {

    try {
        const res = await axios.get(`http://localhost:3001/videogame/${id}`)
        // console.log(res);
        dispatch({
            type: GET_BY_ID,
            payload: res.data
        })
    } catch (error) {
        console.log(error);
    }
}
export const getGenres = () => async (dispatch) => {

    try {
        const res = await axios.get(`http://localhost:3001/genres`)
        // console.log(res);
        dispatch({
            type: GET_BY_GENRES,
            payload: res.data
        })
    } catch (error) {
        console.log(error);
    }
}
export const postVideogame = (game) => async (dispatch) => {
// console.log(game);
    try {
        const res = await axios.post(`http://localhost:3001/videogame`, game)
        // console.log(res);
        return res
    } catch (error) {
        console.log(error);
    }
}



