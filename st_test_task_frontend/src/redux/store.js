import {configureStore} from '@reduxjs/toolkit'
import {combineReducers} from 'redux'
import {authReducer} from "./reducers/authReducer.ts";


export const rootReducer = combineReducers({
    auth: authReducer
})





