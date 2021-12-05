import React from 'react';
import defaultUserIcon from '../../../src/assets/images/default-user-icon.svg';
import style from './ProfilePage.module.css';

const baseURL = 'http://localhost:3000/';

const ProfilePage = (props) => {

    const handlerOnFirstNameChange = (e) => {
        props.onFirstNameChange(e)
    }

    const handlerOnLastNameChange = (e) => {
        props.onLastNameChange(e)
    }

    const handlerOnSubmit = (e) => {
        props.onSubmit(e)
    }
    
    const handlerOnGoBack = () => {
        props.onGoBack()
    }

	return (
        <section className={style.profilePage}>
            <div className={style.content}>
                <h2 className={style.profilePageTitle}>Change Profile Info</h2>
                <form onSubmit={handlerOnSubmit}>
                    <img className={style.photo} src={baseURL + (props.profile.avatar || defaultUserIcon)} alt={props.profile.firstName + ' avatar'}/>   
                    <label className={style.firstName}>
                        First Name : 
                        <input 
                            type='text'
                            name='firstName'
                            value={props.firstNameText}
                            placeholder={props.profile.firstName}
                            onChange={handlerOnFirstNameChange}
                            className={style.firstNameInput}
                        /> 
                    </label>
                    <label className={style.lastName}>
                        Last Name :
                        <input
                            type='text'
                            name='lastName'
                            value={props.lastNameText}
                            placeholder={props.profile.lastName}
                            onChange={handlerOnLastNameChange}
                            className={style.lastNameInput}
                        /> 
                    </label>
                    <p className={style.userEmail}>
                        Email : <span>{props.profile.email}</span>
                    </p>
                    <div className={style.profileBottom}>
                        <button type='button' onClick={handlerOnGoBack} className={style.returnLink}>Return</button>
                        <button type='submit' className={style.submit}>Save</button>
                    </div>
                </form>
            </div>
        </section>
	);
}

export default ProfilePage;
