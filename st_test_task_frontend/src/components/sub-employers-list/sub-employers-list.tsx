import React from "react"
import {Employer} from "../../types/employer";
import {SubEmployersItem} from "./sub-employers-item/sub-employers-item";

interface SubEmployersListProp {
    list: Employer[]
}


export const SubEmployersList = ({list}: SubEmployersListProp) => {

    return (

        <ul>
            {list.map(i => <SubEmployersItem employer={i} />)}
        </ul>
    )
}