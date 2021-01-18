import {Button} from "../../ui/button/button";
import React from "react";

export const Auth = () => {

    const handler = () => {
        alert('test')
    }


    return (
        <div>
            <label htmlFor={'login'}>Login</label>
            <input id={'login'} type="text"/>

            <label htmlFor="{'password'}">Password</label>
            <input id={'password'} type="text"/>

            <Button
                onHandler={handler}
            >Login</Button>
        </div>
    )
}
