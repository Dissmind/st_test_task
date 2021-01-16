import {configureStore} from '@reduxjs/toolkit'
import {combineReducers} from 'redux'
import {authReducer} from "./reducers/authReducer";


export const rootReducer = combineReducers({
    auth: authReducer
})





