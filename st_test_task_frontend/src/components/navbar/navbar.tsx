import React from "react"
import { Link } from "react-router-dom"
import './navbar.css'


export const Navbar = () => {

    return (
        <div className={'Navbar'}>
            {/*Admins*/}
            <Link to={'/employer'}>Employers</Link> <br/>
            <Link to={'/payday'}>Payday</Link> <br/>
        </div>
    )
}