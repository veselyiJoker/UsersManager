import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import {setResult, setResultFetching} from '../../store/actions/result';
import Preloader from '../../assets/Preloader/Preloader'
import style from './ResultPage.module.css';


const getDoubleDigitValue = (value) => {
    return value < 10 ? '0' + value : value
}

const convertDate = (milliseconds) => {
    const date = new Date(+milliseconds)
    return `
        ${
            getDoubleDigitValue(date.getDate())
            + '.' + getDoubleDigitValue(date.getMonth())
            + '.' + date.getFullYear() 
            + ' в ' + getDoubleDigitValue(date.getHours())
            + ':' + getDoubleDigitValue(date.getMinutes())
            + ':' + getDoubleDigitValue(date.getSeconds())
        }
    `;
}
    
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
            <section className={style.resultPage}>
                {this.props.isLoaded
                    ?   <div className={style.content}>
                            <h2>Result Changed Info</h2>
                            <p>First Name : <span>{this.props.firstName}</span></p>
                            <p>Last Name : <span>{this.props.lastName}</span></p>
                            <p>Date : <span>{convertDate(this.props.updatedAt)}</span></p>
                            <Link to="/" className={style.returnLink}>Return</Link>
                        </div>
                    : <Preloader />
                }
            </section>
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