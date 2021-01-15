import React from 'react';
import './App.css';
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";
import { Payday } from './pages/payday';

// import Payday from './pages/payday'

function App() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path={"/payday"}>
                        <Payday />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
