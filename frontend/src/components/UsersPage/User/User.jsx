import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setProfile, setRedirectProfileToHomePage } from '../../../store/actions/profile'
import PropTypes from 'prop-types';
import s from './User.module.css';
import defaultUserIcon from './../../../assets/images/default-user-icon.svg';


class User extends PureComponent {
  handlerOnUserIconClick = () => {
    this.props.setProfile(this.props.users.find(elem => elem._id === this.props.id))
    this.props.setRedirectProfileToHomePage(false)
  }

  render () {
    return (
      <li className={s.user}>
          <Link to={'ProfilePage/' + this.props.id} onClick={this.handlerOnUserIconClick}>
            <img className={s.userPhoto} src={this.props.avatar || defaultUserIcon} alt={this.props.firstName + ' avatar'}/>
          </Link>
          <div className={s.userInfo}>
              <p className={s.userFirstName}>{this.props.firstName}</p>
              <p className={s.userLastName}>{this.props.lastName}</p>
              <p className={s.userEmail}>{this.props.email}</p>
          </div>
      </li>
    );
  }
}

User.propTypes = {
  id: PropTypes.string.isRequired,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  avatar: PropTypes.string,
  users: PropTypes.array
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
  }
}

export default connect(mapStateToProps, {setProfile, setRedirectProfileToHomePage})(User);