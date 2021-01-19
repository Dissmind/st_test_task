import {BrowserRouter, Route, Switch} from "react-router-dom";
import {PaydayPage} from "./payday-page";
import {EmployersPage} from "./employers-page";
import React from "react";
import HomePage from "./home-page";
import Layout from "../components/layout/layout";
import {Employers} from "../components/employers/employers";
import { EmployersAdd } from "../components/employers/employers-add/employers-add";

interface Prop {
    role: number
}


const defaultRoutes = (
    <>
        <Route path={'/'}>

        </Route>
    </>
)

const adminRoutes = (
    <>
        <Route path={'/payday'}>
            <PaydayPage />
        </Route>

        <Route path={'/employers/add'}>
            <EmployersAdd />
        </Route>

        <Route path={'/employer'}>
            <EmployersPage />
        </Route>

        <Route path={'/'}>
            <HomePage />
        </Route>
    </>
)

export const Routers = ({role}: Prop) => {
    return (
        <BrowserRouter>
            <Layout role={role}>
                <Switch>

                    {
                        (role == 0)
                        ? defaultRoutes
                        : null
                    }

                    {
                        (role == 1)
                        ? adminRoutes
                        : null
                    }


                </Switch>
            </Layout>
        </BrowserRouter>
    )
}