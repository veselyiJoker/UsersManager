import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './User.module.css';
import defaultUserIcon from './../../../assets/images/default-user-icon.svg';

const User = (props) => {

  return (
    <li className={s.user}>
        <Link to={'ProfilePage/' + props.id}>
          <img className={s.userPhoto} src={props.avatar ? props.avatar : defaultUserIcon} alt={props.firstName + ' avatar'}/>
        </Link>
        <div className={s.userInfo}>
            <p className={s.userFirstName}>{props.firstName}</p>
            <p className={s.userLastName}>{props.lastName}</p>
            <p className={s.userEmail}>{props.email}</p>
        </div>
    </li>
  );
}

User.propTypes = {
  id: PropTypes.string.isRequired,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  avatar: PropTypes.string,
}

export default User;