import React from "react"
import { connect } from "react-redux";

import {SubEmployersList} from "../components/sub-employers-list/sub-employers-list";



// @ts-ignore
const HomePage = (props) => {
    return (
        <div>
            Tt
        </div>
    )
}


// @ts-ignore
const mapStateToProps = (state) => {
    return {
        list: state.auth.subEmployers
    }
}


export default connect(mapStateToProps, null)(HomePage)