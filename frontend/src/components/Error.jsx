import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
	return (
		<section>
			<p>Что-то пошло не так :(</p>
			<Link to="/"> На главную </Link>
		</section>
	);
}

export default Error;
