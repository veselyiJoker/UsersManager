import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import {setResult, setResultFetching} from '../../store/actions/result';
import ResultPage from './ResultPage';

class ResultPageContainer extends Component {

    componentDidMount() {
        if (this.props.redirectToHomePage) {
            this.props.history.push('/');
        }
    }

    componentWillUnmount() {
        this.props.setResultFetching(false)
    }

    render () {
        return (
            <ResultPage
                firstName = {this.props.resultPage.firstName}
                lastName = {this.props.resultPage.lastName}
                updatedAt = {this.props.resultPage.updatedAt}
                isLoaded = {this.props.resultPage.isLoaded}
            />
        )
    }
}


ResultPageContainer.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    updatedAt: PropTypes.string,
    isFetching: PropTypes.bool
}

const WithUrlDataContainerComponent = withRouter(ResultPageContainer);


const mapStateToProps = (state) => {
    return {
        firstName: state.resultPage.firstName,
        lastName: state.resultPage.lastName,
        updatedAt: state.resultPage.updatedAt,
        isLoaded: state.resultPage.isLoaded,
        redirectToHomePage: state.resultPage.redirectToHomePage,
    }
}


export default connect(mapStateToProps, {
    setResult,
    setResultFetching,
})(WithUrlDataContainerComponent);