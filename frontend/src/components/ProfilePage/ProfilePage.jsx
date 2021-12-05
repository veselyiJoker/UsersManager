import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import style from './ProfilePage.module.css';
import { 
    fetchUpdateProfile,
    setFetchError,
    setProfile,
} from '../../store/actions/profile';
import { setRedirectResultToHomePage, setResult} from '../../store/actions/result.js';
import defaultUserIcon from '../../../src/assets/images/default-user-icon.svg';

const baseURL = 'http://localhost:3000/';

class ProfilePage extends React.PureComponent {

    constructor (props) {
        super(props)
        this.state = {
            firstNameText: this.props.profile.firstName,
            lastNameText: this.props.profile.lastName,
        }
    }

    handlerFirstNameChange = ({ target: { value } }) => {
        this.setState(
            {
                ...this.state,
                firstNameText: value,
            }
        )
    }

    handlerLastNameChange = ({ target: { value } }) => {
        this.setState(
            {
                ...this.state,
                lastNameText: value,
            }
        )
    }

    handlerSubmit = (e) => {
        e.preventDefault();
        this.props.fetchUpdateProfile({
            _id: this.props.match.params.id,
            first_name: this.state.firstNameText,
            last_name: this.state.lastNameText,
            updatedAt: Date.now(),
        })
        
        this.props.setRedirectResultToHomePage(false);
        this.props.history.push('/ResultPage'); 
    }

    goBack = () => {
        this.props.history.goBack()
    }

    componentDidMount() {
        if (this.props.redirectToHomePage) {
            this.props.history.push('/'); 
        }
    }

    render () {
        return (
            <section className={style.profilePage}>
                <div className={style.content}>
                    <h2 className={style.profilePageTitle}>Change Profile Info</h2>
                        <form onSubmit={this.handlerSubmit}>
                            <img className={style.photo} src={baseURL + (this.props.profile.avatar || defaultUserIcon)} alt={this.props.profile.firstName + ' avatar'}/>   
                            <label className={style.firstName}>
                                First Name : 
                                <input 
                                    type='text'
                                    name='firstName'
                                    value={this.state.firstNameText}
                                    placeholder={this.props.profile.firstName}
                                    onChange={this.handlerFirstNameChange}
                                    className={style.firstNameInput}
                                /> 
                            </label>
                            <label className={style.lastName}>
                                Last Name :
                                <input
                                    type='text'
                                    name='lastName'
                                    value={this.state.lastNameText}
                                    placeholder={this.props.profile.lastName}
                                    onChange={this.handlerLastNameChange}
                                    className={style.lastNameInput}
                                /> 
                            </label>
                            <p className={style.userEmail}>
                                Email : <span>{this.props.profile.email}</span>
                            </p>
                            <div className={style.profileBottom}>
                                <button type='button' onClick={this.goBack} className={style.returnLink}>Return</button>
                                <button type='submit' className={style.submit}>Save</button>
                            </div>
                        </form>
                </div>
            </section>
        )
    }
}


ProfilePage.propTypes = {
    users: PropTypes.array,
    profile: PropTypes.object,
    setProfile: PropTypes.func,
    setResult: PropTypes.func,
    resultFetching: PropTypes.func,
}


const WithUrlDataContainerComponent = withRouter(ProfilePage);

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        profile: state.profilePage.profile,
        firstNameText: state.profilePage.firstNameText,
        lastNameText: state.profilePage.lastNameText,
        isRedirect: state.profilePage.isRedirect,
        redirectToHomePage: state.profilePage.redirectToHomePage,
    }
};

export default connect(mapStateToProps, {
    setProfile: setProfile,
    fetchUpdateProfile: fetchUpdateProfile,
    setResult: setResult,
    setRedirectResultToHomePage: setRedirectResultToHomePage,
    setFetchError: setFetchError,
})(WithUrlDataContainerComponent);