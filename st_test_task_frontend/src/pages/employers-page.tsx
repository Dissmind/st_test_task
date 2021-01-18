import React from "react"
import {Route, Switch} from "react-router-dom";
import {Employers} from "../components/employers/employers";


export const EmployersPage = () => {
    return (
        <div>
            EMPLOYERS
            <Employers />
        </div>
    )
}