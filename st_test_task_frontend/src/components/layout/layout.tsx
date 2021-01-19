import React from "react"
import './layout.css'
import {Navbar} from "../navbar/navbar";
import { connect } from "react-redux";


// @ts-ignore
const Layout = ({children, role}) => {
    return (
        <div className={'Layout'}>
            <Navbar role={role} />


            <main>
                {children}
            </main>
        </div>
    )
}


const mapStateToProps = () => {}

const mapDispatchToProps = () => {}



export default connect(mapStateToProps, mapDispatchToProps)(Layout)
