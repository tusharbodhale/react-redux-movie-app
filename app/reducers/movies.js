import {Cmd, loop} from 'redux-loop'
import {
	REQUEST_MOVIE_DATA, 
	RECEIVE_MOVIE_DATA, 
	MARK_FAVOURITE_ACTION, 
	REMOVE_FAVOURITE_ACTION,
	receiveMovieData} from '../actions/sample'
import {fetchMovieData} from '../effects/movies'
import { LOCATION_CHANGE } from 'react-router-redux'


export default (state = {name: null, data: []}, action) => {

	switch (action.type) {

		case LOCATION_CHANGE:
			if(action.payload.pathname==="/"){
				return loop(
					state,
					Cmd.run(fetchMovieData, {
						args                : [],
						successActionCreator: receiveMovieData,
						failActionCreator   : console.log
					})
				)		
			} else{
				return {
					...state
				}
			}
			

		case MARK_FAVOURITE_ACTION:
			return {
				...state,
				name: getRandomCompanyName()
			}

		case REQUEST_MOVIE_DATA:
			return loop(
				state,
				Cmd.run(fetchMovieData, {
					args                : [],
					successActionCreator: receiveMovieData,
					failActionCreator   : console.log
				})
			)

		case RECEIVE_MOVIE_DATA:
			return {
				...state,
				data: action.payload.movies
			}

		default:
			return state
	}
}
