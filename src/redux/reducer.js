import {combineReducers} from 'redux'
import UserReducer from './user/userReducer'

const RootReducer = combineReducers({
    users: UserReducer
})

export default RootReducer