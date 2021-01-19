import React, {useState} from "react";
import './auth.css'
import {Button} from "../../ui/button/button";
import { connect } from "react-redux";
import axios from "axios";
import {store} from '../../../src/index'

interface AuthProp {
    logIn: any
}


export const Auth = ({logIn}: AuthProp) => {

    const [login, setLogin] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const clear = () => {
        setLogin('')
        setPassword('')
    }

    const handler = () => {
        if (login.length < 1 && password.length < 1) {
            clear()
        }

        axios.post(
            'https://localhost:5001/api/auth?login='+login+'&password='+password)
            .then(response => {
                const data = response.data

                if ((data.id - 0) > 0) {

                    let employer = {}
                    axios.post('https://localhost:5001/api/employer/'+data.id)
                        .then(response => {
                            employer = response.data
                        })

                    store.dispatch({
                        type: 'LOG_IN',
                        payload: {
                            login,
                            employer: employer,
                            role: data.role
                        }
                    })

                } else {
                    clear()
                }
            })
    }


    return (
        <div className={'Auth'}>

            <div className={'input'}>
                <label htmlFor={'login'}>Login</label>
                <input
                    value={login}
                    onChange={e => setLogin(e.target.value)}
                    id={'login'}
                    type="text"
                />
            </div>

            <div className={'input'}>
                <label htmlFor="{'password'}">Password</label>
                <input
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    onKeyPress={e => {
                        if (e.key === 'Enter') {
                            handler()
                        }
                    }}
                    id={'password'}
                    type="password"
                />
            </div>

            <div className={'input'}>
                <Button
                    onHandler={handler}
                >Login</Button>
            </div>
        </div>
    )
}