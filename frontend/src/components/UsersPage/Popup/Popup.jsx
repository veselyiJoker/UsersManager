import React from 'react';
import style from './Popup.module.css';
import defaultUserIcon from './../../../assets/images/default-user-icon.svg';
import { convertDate } from '../../../assets/utils';
import { Link } from 'react-router-dom';

const Popup = (props) => {

    const handlerClosePopup = () => {
        props.closePopup()
    }

    const onContainerClick = (e) => {
        e.stopPropagation()
    }

    const handlerRedirectToProfilePage = () => {
        props.redirectToProfilePage(props.popupData._id)
    }

	return (
        <section onClick={handlerClosePopup} className={props.showPopup ? style.popup : style.popupHidden}>
            <div onClick={onContainerClick} className={style.container}>
                <button onClick={handlerClosePopup} className={style.closeButton}></button>
                <div className={style.photoWrapper}>
                        <img src={props.popupData.avatar || defaultUserIcon} alt="" />
                </div>
                <div className={style.popupInfo}>
                    <p>First name: {props.popupData.firstName}</p>
                    <p>Last name: {props.popupData.lastName}</p>
                    <p>Email: {props.popupData.email}</p>
                    <p>last update: {convertDate(props.popupData.updatedAt)} </p>
                </div>
                <Link to="/ProfilePage" onClick={handlerRedirectToProfilePage} className={style.changeLink}>
                    <span>
                        Change
                    </span> 
                </Link>
            </div>
        </section>
	);
}

export default Popup;
