import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './ResultPage.module.css';
import { setResult, setResultFetching } from '../../store/actions/result';
import { Redirect } from 'react-router';

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

class ResultPage extends React.Component {
    render () {
        if (!this.props.isFetching) {
            this.props.setResultFetching(true)
            return <Redirect to="/Error" />
        }
        return (
            <section className={style.resultPage}>
                <div className={style.content}>
                    <h2>Result Changed Info</h2>
                    <p>First Name : <span>{this.props.firstName}</span></p>
                    <p>Last Name : <span>{this.props.lastName}</span></p>
                    <p>Date : <span>{convertDate(this.props.updatedAt)}</span></p>
                    <Link to="/" className={style.returnLink}>Return</Link>
                </div>
            </section>
        )
    }
}

ResultPage.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    updatedAt: PropTypes.string,
    isLoaded: PropTypes.bool
}


const mapStateToProps = (state) => {
    return {
        firstName: state.resultPage.firstName,
        lastName: state.resultPage.lastName,
        updatedAt: state.resultPage.updatedAt,
        isFetching: state.resultPage.isFetching,
    }
}


export default connect(mapStateToProps, {setResult, setResultFetching })(ResultPage);