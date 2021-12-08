import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { setProfile } from '../../store/actions/profile';
import { fetchUpdateProfile } from '../../store/saga/actions/profile';
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
            _id: this.props.profile._id,
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
        if (this.props.isRedirectToHomePage) {
            this.props.history.push('/'); 
        }
    }

    render () {
        return (
            <ProfilePage
                profile = {this.props.profile}
                firstNameText = {this.state.firstNameText}
                lastNameText = {this.state.lastNameText}
                isRedirectToHomePage = {this.props.isRedirectToHomePage}
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
        isRedirectToHomePage: state.profilePage.isRedirectToHomePage,
    }
};

export default connect(mapStateToProps, {
    setProfile: setProfile,
    fetchUpdateProfile: fetchUpdateProfile,
    setResult: setResult,
    setRedirectResultToHomePage: setRedirectResultToHomePage,
})(WithUrlDataContainerComponent);