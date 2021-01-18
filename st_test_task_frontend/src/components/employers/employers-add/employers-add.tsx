import React, {useState} from "react"
import './employers-add.css'

import {Button} from "../../../ui/button/button";
import {Employer} from "../../../types/employer";
import axios from "axios";
import {Navbar} from "../../navbar/navbar";
import { NavLink } from "react-router-dom";


export const EmployersAdd = () => {

    const [name, setName] = useState('')
    const [salary, setSalary] = useState('')
    const [workedAt, setWorkedAt] = useState('')
    const [group, setGroup] = useState('employer')


    const [groupsSelector, setGroupsSelector] = useState([])

    const addEmployer = () => {
        // @ts-ignore
        // const employer: Employer = {
        //     id: 0,
        //     name: name,
        //     group: group,
        //     salary: (salary - 0),
        //     workedAt: workedAt
        // }

        const sal = salary - 0
        axios.post('https://localhost:5001/api/employer', {
            name: name,
            group: group,
            workedAt: workedAt,
            salary: sal,
            bossesId: -1
        })



    }

    return (
        <div className={'Employers-add'}>
            <div className={'input'}>
                <label htmlFor="name">Name </label>
                <input id="name"
                       type="text"
                       onChange={(event) => {
                           setName(event.target.value)
                       }}
                       value={name}
                />
            </div>

            <div className={'input'}>
                <label htmlFor="salary">Salary </label>
                <input
                    id="salary"
                    type="text"
                    onChange={(event) => {
                        setSalary(event.target.value)
                    }}
                    value={salary}
                />
            </div>


            <div className={'input'}>
                <label htmlFor="worked-at">WorkedAt </label>
                <input
                    id="worked-at"
                    type="text"
                    onChange={(event) => {
                        setWorkedAt(event.target.value)
                    }}
                    value={workedAt}
                />
            </div>

            <div className={'input'}>
                <select
                    onChange={e => {
                        const selectedIndex = e.target.options.selectedIndex
                        setGroup(e.target.options[selectedIndex].value.toLowerCase())
                    }}
                >
                    <option selected={true}>Employer</option>
                    <option>Manager</option>
                </select>
            </div>

            <div className="btn">
                <NavLink to={'/employers'}>
                    <Button
                        onHandler={addEmployer}
                    >
                        Добавить
                    </Button>
                </NavLink>
            </div>

        </div>
    )
}
