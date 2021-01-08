import {ADD_USER_DATA, Get_USER_DATA} from './userTypes';

const initialState = {
    email: "",
    name: "",
    number: ""
}


const UserReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case Get_USER_DATA:
            return {
                state
            }

        case ADD_USER_DATA:
            return{
                ...state,
                email : payload.email,
                name: payload.name,
                phone: payload.number
            }

        default:
            return state;
    }
}

export default UserReducer