export const SAMPLE_ACTION       = "SAMPLE_ACTION"
export const REQUEST_SAMPLE_DATA = "REQUEST_SAMPLE_DATA"
export const RECEIVE_SAMPLE_DATA = "RECEIVE_SAMPLE_DATA"
export const MARK_FAVOURITE_ACTION       = "MARK_FAVOURITE_ACTION"
export const REMOVE_FAVOURITE_ACTION       = "REMOVE_FAVOURITE_ACTION"
export const REQUEST_MOVIE_DATA = "REQUEST_MOVIE_DATA"
export const RECEIVE_MOVIE_DATA = "RECEIVE_MOVIE_DATA"
export function sampleAction() {
	return {
		type   : SAMPLE_ACTION,
		payload: {}
	}
}

export function requestSampleData() {
	return {
		type   : REQUEST_SAMPLE_DATA,
		payload: {}
	}
}

export function receiveSampleData(data) {
	return {
		type   : RECEIVE_SAMPLE_DATA,
		payload: {data}
	}
}

export function markFavouriteAction(id) {
	return {
		type   : MARK_FAVOURITE_ACTION,
		payload: {id}
	}
}
export function removeFavouriteAction(id) {
	return {
		type   : REMOVE_FAVOURITE_ACTION,
		payload: {id}
	}
}
export function requestMovieData() {
	return {
		type   : REQUEST_MOVIE_DATA,
		payload: {}
	}
}

export function receiveMovieData(movies) {
	
	return {
		type   : RECEIVE_MOVIE_DATA,
		payload: {movies}
	}
}