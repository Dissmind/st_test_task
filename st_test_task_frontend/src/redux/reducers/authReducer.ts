
import { Employer } from "../../types/employer";

interface AuthState {
    isAuth: boolean,
    login: string,
    role: number | null,
    employer: Employer | null,
    subEmployers: Employer[]
}



const initialState: AuthState = {
    isAuth: false,
    login: '',
    role: null,
    employer: null,
    subEmployers: [
        {
            id: 1,
            name: 'test',
            group: 'test',
            workedAt: '10.10.10',
            salary: 1
        },
    ]
}


export function authReducer(state = initialState, action: any) {
    switch (action.type) {
        case 'LOG_IN':
            return {
                ...state,
                isAuth: true,
                login: action.payload.login,
                role: action.payload.role,
                employer: action.payload.employer,
            }

        case 'LOG_OUT':
            return initialState
    }

    return state
}