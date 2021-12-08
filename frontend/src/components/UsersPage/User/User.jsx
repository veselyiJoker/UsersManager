import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { setProfile, setRedirectProfileToHomePage } from '../../../store/actions/profile'
import PropTypes from 'prop-types';
import s from './User.module.css';
import defaultUserIcon from './../../../assets/images/default-user-icon.svg';


class User extends PureComponent {

  handlerUserClick = () => {
    this.props.openPopup({
      _id: this.props._id,
      firstName: this.props.firstName,
      lastName: this.props.lastName,
      email: this.props.email,
      avatar: this.props.avatar,
      updatedAt: this.props.updatedAt,
    })
  }

  render () {
    return (
      <li className={s.user}>
          <div onClick={this.handlerUserClick}>
            <img className={s.userPhoto} src={this.props.avatar || defaultUserIcon} alt={this.props.firstName + ' avatar'}/>
          </div>
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
  _id: PropTypes.string.isRequired,
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