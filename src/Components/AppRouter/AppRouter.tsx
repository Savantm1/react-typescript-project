import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, Redirect } from "react-router-dom"
import { LOGIN_ROUTE, PERSON_ROUTE } from '../../consts';
import { changeLoginStatus } from '../../Redux/PersonReducer';
import { privateRoutes, publicRoutes } from '../../routes';

const AppRouter = () => {
    let isLogin = useSelector((state :any) :boolean => state.person.isLogin)

    return isLogin ?
        (
            <Switch>
                {privateRoutes.map(({ path, Component }) => {
                    return (
                        <Route path={path} component={Component} exact={true} />
                    )
                })}
                <Redirect to={PERSON_ROUTE} />
            </Switch>
        ) : (
            <Switch>
                {publicRoutes.map(({ path, Component }) => {
                    return (
                        <Route path={path} component={Component} exact={true} />
                    )
                })}
                <Redirect to={LOGIN_ROUTE} />
            </Switch>
        )
}

export default AppRouter
