import React from 'react';
import UsersTop from './UsersTop/UsersTop';
import User from './User/User';
import style from './UsersPage.module.css';

const UsersPage = (props) => {
	return (
        <section className={style.usersPage}>
            <UsersTop />
            <ul className={style.usersList}>
                    { props.users.map(elem => {
                        return (
                            <User
                                _id = {elem._id}
                                key = {elem._id}
                                firstName = {elem.firstName} 
                                lastName = {elem.lastName}
                                email = {elem.email}
                                avatar = {elem.avatar}
                                updatedAt = {elem.updatedAt}
                                openPopup = {props.openPopup}
                            />
                        )
                    }) }
            </ul>
        </section>
	);
}

export default UsersPage;
