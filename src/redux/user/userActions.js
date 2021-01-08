import {ADD_USER_DATA, Get_USER_DATA} from './userTypes';

export const fetchUserData = () => {
    return{
        type:  Get_USER_DATA
    }
}

export const addUserData = (userData) => {
    return{
        type: ADD_USER_DATA,
        payload: userData
    }
}