import React from "react"
import {Link, Switch} from "react-router-dom"
import './navbar.css'


// @ts-ignore
export const Navbar = ({role}) => {

    const defaultLinks = (
        <>
            <Link to={'/employer'}>Информация</Link>
            <br/>

            <Link to={'/payday/sub'}>ЗП подчиненных за интревал</Link>
            <br/>

            <Link to={'/payday'}>ЗП за интревал</Link>
            <br/>
        </>
    )

    const adminsLinks = (
        <>
            <Link to={'/employer'}>Сотрудники</Link>
            <br/>

            <Link to={'/payday'}>ЗП за интревал</Link>
            <br/>
        </>
    )

    return (
        <div className={'Navbar'}>
            {
                (role == 0)
                    ? defaultLinks
                    : null
            }

            {
                (role == 1)
                    ? adminsLinks
                    : null
            }
        </div>
    )
}