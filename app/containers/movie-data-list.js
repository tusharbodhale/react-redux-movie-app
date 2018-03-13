import React from 'react'
import {connect} from "react-redux"
import List from '../components/list'

// This is a container

export const mapStateToProps = (state) => {
	console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>',state);
	return {
		data: state.movies.data
	}
}

export default connect(mapStateToProps)(List)
