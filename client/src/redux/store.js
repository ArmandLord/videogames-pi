import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
// import {composeWithDevTools} from 'redux-devtools-extension'
//importamos al reducer
import videogameReducer from './reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

 
export default function generateStore() {
    const store = createStore( videogameReducer, composeEnhancers( applyMiddleware(thunk) ) )
    return store
}

