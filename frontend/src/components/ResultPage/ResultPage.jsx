import React from 'react';
import style from './ResultPage.module.css';
import { Link } from 'react-router-dom';
import Preloader from '../../assets/Preloader/Preloader'
import { convertDate } from '../../assets/utils';

const ResultPage = (props) => {
	return (
        <section className={style.resultPage}>
            {props.isLoaded
                ?   <div className={style.content}>
                        <h2>Result Changed Info</h2>
                        <p>First Name : <span>{props.firstName}</span></p>
                        <p>Last Name : <span>{props.lastName}</span></p>
                        <p>Date : <span>{convertDate(props.updatedAt)}</span></p>
                        <Link to="/" className={style.returnLink}>Return</Link>
                    </div>
                : <Preloader />
            }
        </section>
	);
}

export default ResultPage;
