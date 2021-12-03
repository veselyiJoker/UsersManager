import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router';
import PropTypes from 'prop-types';
import style from './ProfilePage.module.css';
import { 
    fetchUpdateProfile,
    setFetchError,
    setFirstNameText,
    setLastNameText,
    setProfile, 
} from '../../store/actions/profile';
import { setResult, setResultFetching} from '../../store/actions/result.js';
import { setUsers } from '../../store/actions/users.js';

const baseURL = 'http://localhost:3000/';

class ProfilePage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            redirect: false,
        }
    }

    handlerFirstNameChange = ({ target: { value } }) => {
        this.props.setFirstNameText(value)
    }

    handlerLastNameChange = ({ target: { value } }) => {
        this.props.setLastNameText(value)
    }

    handlerSubmit = (e) => {
        e.preventDefault();

        this.setState({
            ...this.state,
            redirect: true,
        })

        this.props.setResultFetching(true)

        this.props.fetchUpdateProfile({
            _id: this.props.match.params.id,
            first_name: this.props.firstNameText,
            last_name: this.props.lastNameText,
        })

    }

    componentDidMount() {
        try {
            this.props.setProfile(this.props.users.find(elem => elem._id === this.props.match.params.id))
        } catch {
            this.props.setFetchError(true)
        }
    }

    render () {
        if (this.props.isFetchError) {
            this.props.setFetchError(false)
            return <Redirect to="/Error" />
        }
        if (this.state.redirect) {
            return <Redirect to={'/ResultPage'} />
        }
        return (
            <section className={style.profilePage}>
                <div className={style.content}>
                    <h2 className={style.profilePageTitle}>Change Profile Info</h2>
                        <form onSubmit={this.handlerSubmit}>
                            <img className={style.photo} src={baseURL + this.props.profile.avatar} alt={this.props.profile.firstName + ' avatar'}/>
                            
                            <label className={style.firstName}>
                                First Name : 
                                <input 
                                    type='text'
                                    name='firstName'
                                    value={this.props.firstNameText}
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
                                    value={this.props.lastNameText}
                                    placeholder={this.props.profile.lastName}
                                    onChange={this.handlerLastNameChange}
                                    className={style.lastNameInput}
                                /> 
                            </label>
                            <p className={style.userEmail}>
                                Email : <span>{this.props.profile.email}</span>
                            </p>
                            <div className={style.profileBottom}>
                                <button onClick={this.props.history.goBack} className={style.returnLink}>Return</button>
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
    setUsers: PropTypes.func,
}


const WithUrlDataContainerComponent = withRouter(ProfilePage);

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        profile: state.profilePage.profile,
        firstNameText: state.profilePage.firstNameText,
        lastNameText: state.profilePage.lastNameText,
        isFetchError: state.profilePage.isFetchError,
    }
};

export default connect(mapStateToProps, {
    setProfile: setProfile,
    fetchUpdateProfile: fetchUpdateProfile,
    setFirstNameText: setFirstNameText,
    setLastNameText: setLastNameText,
    setResult: setResult,
    setUsers: setUsers,
    setResultFetching: setResultFetching,
    setFetchError: setFetchError,
})(WithUrlDataContainerComponent);