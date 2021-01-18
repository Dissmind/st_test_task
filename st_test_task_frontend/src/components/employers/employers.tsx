import React from "react"
import './employers.css'

import {Button} from "../../ui/button/button";
import { EmployersTable } from "./employers-table/employers-table";
import { NavLink } from "react-router-dom";


export const Employers = () => {

    const addEmployer = () => {

    }
    const deleteEmployer = (id: number) => {}
    const addSubEmployer = (id: number) => {}


    return (
        <div
            className={'Employers'}
        >

            <nav>
                <div className={'btn'}>

                    <NavLink
                        to={'/employers/add'}
                    >
                    <Button
                        onHandler={addEmployer}
                    >Добавить</Button>
                    </NavLink>
                </div>

                <div className="btn">
                    <Button
                        onHandler={deleteEmployer}
                    >Удалить</Button>
                </div>

                <div className="btn">
                    <Button
                        onHandler={addSubEmployer}
                    >Установить руководителя</Button>
                </div>
            </nav>

            <div className={'table'}>
                <EmployersTable />
            </div>
        </div>
    )
}