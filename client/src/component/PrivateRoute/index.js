import React from 'react'
import { Route, Redirect, useHistory } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
    return <Route {...rest}
        component={(props) => {
            const token = window.localStorage.getItem('token');

            if (token)
            {
                return <Component {...props} />
            } else
            {
                return <Redirect to={"/login"} />
            }
        }
        } />
}
export const LoginRoute = ({ component: Component, ...rest }) => {
    const history = useHistory();
    return <Route {...rest}
        component={(props) => {
            const token = window.localStorage.getItem('token');
            if (token)
            {
                history.goBack();
                return null;
            } else
            {
                return <Component {...props} />
            }
        }}
    />
}

export default PrivateRoute;