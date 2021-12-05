import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setFetchError } from '../store/actions/profile';

class Error extends Component {

	// componentDidMount (){
	// 	this.props.setFetchError(false)
	// }

	render () {
		return (
			<section>
				<p>Что-то пошло не так :(</p>
				<Link to="/"> На главную </Link>
			</section>
		);
	}

}

const mapStateToProps = () => {
	return {}
}

export default connect(mapStateToProps, {
	setFetchError: setFetchError,
})(Error);