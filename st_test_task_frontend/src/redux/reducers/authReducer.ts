import {bindReporter} from "web-vitals/dist/lib/bindReporter";
import { Employer } from "../../types/employer";






interface AuthState {
    isAuth: boolean,
    role: number | null,
    employer: Employer | null,
    subEmployers: Employer[]
}


const initialState: AuthState = {
    isAuth: false,
    role: null,
    employer: null,
    subEmployers: [
        {
            id: 1,
            name: 'Alexey',
            group: 'admin',
            workedAt: '10.10.10',
            salary: 1000
        },
        {
            id: 2,
            name: 'Dmitriy',
            group: 'employers',
            workedAt: '10.10.10',
            salary: 2000
        }
    ]
}


export function authReducer(state = initialState, action: any) {
    switch (action.type) {
        case 'LOG_IN':
            return {
                ...state,
                isAuth: true,
                role: action.payload.role
            }

        case 'LOG_OUT':
            return {
                ...state,
                isAuth: false,
                role: 0
            }
    }

    return state
}