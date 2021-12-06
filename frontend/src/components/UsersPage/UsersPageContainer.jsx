import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
    addUsers,
    setCurrentPage,
    setTotalPages,
    usersFetching,
    fetchSetUsers,
    fetchAddUsers,
} from '../../store/actions/users.js';
import UsersPage from './UsersPage.jsx';

class UsersPageContainer extends PureComponent {

    scrollHandler = () => {
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
    
        if (scrollHeight - (scrollTop + windowHeight) < 100) {
            this.nextPage();
        }
    }

    nextPage = () => {
        if (this.props.isLoaded && this.props.currentPage < this.props.totalPages) {
            this.props.usersFetching(false);
            this.props.setCurrentPage(this.props.currentPage + 1);
            this.props.fetchAddUsers(this.props.currentPage);
        }
    }

    componentDidMount() {
        if (!this.props.users.length) {
            this.props.fetchSetUsers()
        }
        document.addEventListener('scroll', this.scrollHandler);
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.scrollHandler);
    }

    render() {
        return (
            <UsersPage
                users = {this.props.users}
            />
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
})(UsersPageContainer);