import React, {useState} from "react";
import './auth.css'
import {Button} from "../../ui/button/button";
import { connect } from "react-redux";

interface AuthProp {
    logIn: any
}

export const Auth = ({logIn}: AuthProp) => {
    const [login, setLogin] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const handler = () => {
        if (true) {
            logIn()
        }
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


// // @ts-ignore
// const mapDispatchToProps = dispatch => {
//     return {
//         logIn: () => dispatch({type: 'LOG_IN'})
//     }
// }
//
//
// export default connect(null, mapDispatchToProps)(Auth)