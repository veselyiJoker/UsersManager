import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import {setResult, setResultFetching} from '../../store/actions/result';
import ResultPage from './ResultPage';

class ResultPageContainer extends Component {

    componentDidMount() {
        if (this.props.isRedirectToHomePage) {
            this.props.history.push('/');
        }
    }

    componentWillUnmount() {
        this.props.setResultFetching(false)
    }

    render () {
        return (
            <ResultPage
                firstName = {this.props.firstName}
                lastName = {this.props.lastName}
                updatedAt = {this.props.updatedAt}
                isLoaded = {this.props.isLoaded}
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
        isRedirectToHomePage: state.resultPage.isRedirectToHomePage,
    }
}

export default connect(mapStateToProps, {
    setResult,
    setResultFetching,
})(WithUrlDataContainerComponent);