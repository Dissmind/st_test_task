import {BrowserRouter, Route, Switch} from "react-router-dom";
import {PaydayPage} from "./payday-page";
import {EmployersPage} from "./employers-page";
import React from "react";
import HomePage from "./home-page";
import Layout from "../components/layout/layout";
import {Employers} from "../components/employers/employers";
import { EmployersAdd } from "../components/employers/employers-add/employers-add";

export const Routers = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>

                    <Route path={'/payday'}>
                        <PaydayPage />
                    </Route>

                    <Route path={'/employers/add'}>
                        <EmployersAdd />
                    </Route>

                    <Route path={'/employers'}>
                        <EmployersPage />
                    </Route>

                    <Route path={'/'}>
                        <HomePage />
                    </Route>
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}