import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
    addUsers,
    setCurrentPage,
    setTotalPages,
    usersFetching
} from '../../store/actions/users.js';
import UsersPage from './UsersPage.jsx';
import { fetchAddUsers, fetchSetUsers } from '../../store/saga/actions/users.js';
import Popup from './Popup/Popup.jsx';
import { setProfile, setRedirectProfileToHomePage } from '../../store/actions/profile.js';

class UsersPageContainer extends PureComponent {

    constructor () {
        super()
        this.state = {
            popupData: {
                _id: '',
                avatar: '',
                firstName: '',
                lastName: '',
                email: '',
                updatedAt: '',
            },
            showPopup: false,
        }
    }

    onScroll = () => {
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
    
        if (scrollHeight - (scrollTop + windowHeight) < 100) {
            this.nextPage();
        }
    }

    nextPage = () => {
        if (this.props.isLoaded && this.props.currentPage < this.props.totalPages) {
            this.props.usersFetching(false)
            this.props.setCurrentPage(this.props.currentPage + 1)
            this.props.fetchAddUsers(this.props.currentPage)
        }
    }

    openPopup = (popupData) => {
        this.setState(
            {
                popupData: {
                    ...this.state.popupData,
                    ...popupData
                },
                showPopup: true,
            }
        )
        document.documentElement.style.marginRight = window.innerWidth - document.body.clientWidth + 'px';
        document.documentElement.style.overflow = 'hidden';
        document.addEventListener('keydown', this.closePopupOnEsc)
    }

    closePopup = () => {
        this.setState({
            ...this.state,
            showPopup: false,
        })
        document.documentElement.style.overflow = '';
        document.documentElement.style.marginRight = '';
    }

    closePopupOnEsc = (e) => {
        if( e.key === 'Escape') {
            this.closePopup();
            document.removeEventListener('keydown', this.closePopupOnEsc)
        };
    }

    redirectToProfilePage = (id) => {
        this.props.setProfile(this.props.users.find(elem => elem._id === id))
        this.props.setRedirectProfileToHomePage(false)
        document.documentElement.style.overflow = '';
        document.documentElement.style.marginRight = '';
    }

    componentDidMount() {
        if (!this.props.users.length) {
            this.props.fetchSetUsers()
        }
        document.addEventListener('scroll', this.onScroll)
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.onScroll)
    }

    render() {
        return (
            <>
                <UsersPage
                    users = {this.props.users} 
                    openPopup = {this.openPopup} 
                />
                <Popup 
                    showPopup= {this.state.showPopup}
                    popupData = {this.state.popupData}
                    closePopup = {this.closePopup}
                    redirectToProfilePage = {this.redirectToProfilePage}
                />
            </>
        )
    }
    
}

UsersPageContainer.propTypes = {
    users: PropTypes.array,
    currentPage: PropTypes.number,
    totalPages: PropTypes.number,
    isLoaded: PropTypes.bool,
    setUsers: PropTypes.func,
    addUsers: PropTypes.func,
    setCurrentPage: PropTypes.func,
    setTotalPages: PropTypes.func,
    usersFetching: PropTypes.func,
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        totalPages: state.usersPage.totalPages,
        isLoaded: state.usersPage.isLoaded,
    }
}


export default connect(mapStateToProps, {
    fetchSetUsers,
    fetchAddUsers,
    addUsers,
    setCurrentPage,
    setTotalPages,
    usersFetching,
    setProfile,
    setRedirectProfileToHomePage,
})(UsersPageContainer);