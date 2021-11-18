import React from 'react';
import { NavBar } from './NavBar';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {
    return <Route {...rest} render={(props)=>{
        if (localStorage.getItem("token")) {
            return (
                <>
                    <NavBar />
                    <Component {...props}/>
                </>
            )
        } else {
            return <Redirect to="/login"/>;
        }
    }}/>;
}

export default PrivateRoute;