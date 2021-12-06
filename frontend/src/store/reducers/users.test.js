import types from '../types.js';

import usersReducer from './users'

describe('Users Reducer', () => {

    it('Should retutn default state', () => {
        const newState = usersReducer(undefined, {});
        expect(newState).toEqual({
            users: [],
            currentPage: null,
            itemsOnPage: null,
            totalItems: null,
            totalPages: null,
            isLoaded: false,
        });
    });

    it('Should return new state if receiving (set users data action)', () => {

        const setUsersData = {
            currentPage: null,
            itemsOnPage: null,
            totalItems: null,
            totalPages: null,
            users: []
        };

        const newState = usersReducer(undefined, {
            type: types.SET_USERS,
            payload: setUsersData,
        })

        expect(newState).toEqual({
            currentPage: null,
            itemsOnPage: null,
            totalItems: null,
            totalPages: null,
            isLoaded: true,
            users: [],
        });

    });

    it('Should return new state if receiving (add users data action)', () => {

        const addUsersData = [];

        const newState = usersReducer(undefined, {
            type: types.ADD_USERS,
            payload: addUsersData,
        })

        expect(newState).toEqual({
            currentPage: null,
            itemsOnPage: null,
            totalItems: null,
            totalPages: null,
            isLoaded: true,
            users: [],
        });

    });

    it('Should return new state if receiving (update users data action)', () => {

        const updateUsersData = [];

        const newState = usersReducer(undefined, {
            type: types.UPDATE_USERS,
            payload: updateUsersData,
        })

        expect(newState).toEqual({
            currentPage: null,
            itemsOnPage: null,
            totalItems: null,
            totalPages: null,
            isLoaded: false,
            users: [],
        });

    });


    it('Should return new state if receiving (users fetching data action)', () => {

        const usersFetchingData = true;

        const newState = usersReducer(undefined, {
            type: types.USERS_FETCHING,
            payload: usersFetchingData,
        })

        expect(newState).toEqual({
            currentPage: null,
            itemsOnPage: null,
            totalItems: null,
            totalPages: null,
            isLoaded: true,
            users: [],
        });

    });


    it('Should return new state if receiving (set current page data action)', () => {

        const setCurrentPageData = 2;

        const newState = usersReducer(undefined, {
            type: types.SET_CURRENT_PAGE,
            payload: setCurrentPageData,
        })

        expect(newState).toEqual({
            currentPage: setCurrentPageData,
            itemsOnPage: null,
            totalItems: null,
            totalPages: null,
            isLoaded: false,
            users: [],
        });

    });

    it('Should return new state if receiving (set total pages)', () => {

        const setTotalPageData = 2;

        const newState = usersReducer(undefined, {
            type: types.SET_TOTAL_PAGES,
            payload: setTotalPageData,
        })

        expect(newState).toEqual({
            currentPage: null,
            itemsOnPage: null,
            totalItems: null,
            totalPages: setTotalPageData,
            isLoaded: false,
            users: [],
        });

    });

});