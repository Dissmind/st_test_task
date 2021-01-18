import React from "react"
import './sub-employers-item.css'
import {Employer} from "../../../types/employer";

interface SubEmployersItemType {
    employer: Employer
}

export const SubEmployersItem = ({employer}: SubEmployersItemType) => {
    return (
        <li className={'SubEmployersItem'}>
            <span className={'list-info id'}>{employer.id}</span>

            <span className={'list-info name'}>{employer.name}</span>

            <span className={'list-info salary'}>{employer.salary}</span>
            <span className={'list-info group'}>{employer.group}</span>
            <span className={'list-info worked-at'}>{employer.workedAt}</span>
        </li>
    )
}