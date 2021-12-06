import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import {
    fetchUpdateProfile,
    setProfile,
} from '../../store/actions/profile';
import { setRedirectResultToHomePage, setResult} from '../../store/actions/result.js';
import ProfilePage from './ProfilePage';


class ProfilePageContainer extends React.PureComponent {

    constructor (props) {
        super(props)
        this.state = {
            firstNameText: this.props.profile.firstName,
            lastNameText: this.props.profile.lastName,
        }
    }

    onFirstNameChange = ({ target: { value } }) => {
        this.setState(
            {
                ...this.state,
                firstNameText: value,
            }
        )
    }

    onLastNameChange = ({ target: { value } }) => {
        this.setState(
            {
                ...this.state,
                lastNameText: value,
            }
        )
    }

    onSubmit = (e) => {
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

    onGoBack = () => {
        this.props.history.goBack()
    }

    componentDidMount() {
        if (this.props.redirectToHomePage) {
            this.props.history.push('/'); 
        }
    }

    render () {
        return (
            <ProfilePage
                profile = {this.props.profile}
                firstNameText = {this.state.firstNameText}
                lastNameText = {this.state.lastNameText}
                redirectToHomePage = {this.props.redirectToHomePage}
                onFirstNameChange = {this.onFirstNameChange}
                onLastNameChange = {this.onLastNameChange}
                onSubmit = {this.onSubmit}
                onGoBack = {this.onGoBack}
            />
        )
    }
    
}


ProfilePageContainer.propTypes = {
    profile: PropTypes.object,
    setProfile: PropTypes.func,
    setResult: PropTypes.func,
    resultFetching: PropTypes.func,
}


const WithUrlDataContainerComponent = withRouter(ProfilePageContainer);

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        redirectToHomePage: state.profilePage.redirectToHomePage,
    }
};

export default connect(mapStateToProps, {
    setProfile: setProfile,
    fetchUpdateProfile: fetchUpdateProfile,
    setResult: setResult,
    setRedirectResultToHomePage: setRedirectResultToHomePage,
})(WithUrlDataContainerComponent);