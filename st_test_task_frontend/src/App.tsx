import React, {useState} from 'react';
import './App.css';

import { connect } from 'react-redux';
import { Routers } from './pages/routers';
import { Auth } from './components/auth/auth';



// @ts-ignore
function App(props) {
    const [isAuth, setIsAuth] = useState(false)

    return (
        <div>
            {
                (props.auth.isAuth)
                    ? <Routers role={props.auth.role} />
                    : <Auth logIn={props.logIn} />
            }
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
    // @ts-ignore
    return {
        logIn: () => dispatch({type: 'LOG_IN'})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
