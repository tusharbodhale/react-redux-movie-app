import {combineReducers} from 'redux-loop'
import {routerReducer} from 'react-router-redux'

import sampleReducer from './sample.js'
import moviesReducer from './movies.js'

const rootReducer = combineReducers({
	sample: sampleReducer,
	router: routerReducer,
	movies: moviesReducer
})

export default rootReducer
