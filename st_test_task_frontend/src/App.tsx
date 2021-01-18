import React, {useState} from 'react';
import './App.css';

import { connect } from 'react-redux';
import { Routers } from './pages/routers';
import { Auth } from './components/auth/auth';
import Layout from "./components/layout/layout";








// @ts-ignore
function App(props) {
    const [isAuth, setIsAuth] = useState(false)

    return (
        <div>
            {/*{(props.auth.isAuth) ? 'Auth true' : 'Auth false'}*/}

            {
                (props.auth.isAuth)
                    ? <Routers />
                    : <Auth />
            }

            <p
                onClick={props.logIn}
            >TTT</p>
        </div>
    );
}


// @ts-ignore
const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}


// @ts-ignore
const mapDispatchToProps = (dispatch) => {
    return {
        logIn: () => dispatch({type: 'LOG_IN', payload: {role: 1}})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
