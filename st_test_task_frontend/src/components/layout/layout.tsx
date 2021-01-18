import React from "react"
import './layout.css'
import {Navbar} from "../navbar/navbar";
import {Routers} from "../../pages/routers";
import { connect } from "react-redux";


// @ts-ignore
const Layout = ({children}) => {


    return (
        <div className={'Layout'}>
            <Navbar />

            <main>
                {children}
            </main>
        </div>
    )
}


const mapStateToProps = () => {}

const mapDispatchToProps = () => {}



export default connect(mapStateToProps, mapDispatchToProps)(Layout)
