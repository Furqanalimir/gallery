import React, { useEffect, useContext } from 'react';
import './assets/main.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './container/Login'
import ImageList from './container/ImageList';
import Register from './container/Register'
import ProductDetails from './container/ProductDetails';
import { Context } from './context/Context';
import { checkAuth } from './context/Action';
import { getImages } from './context/Action';
import SearchList from './container/SearchList';
import MyList from './container/MyList';
import PrivateRoute, { LoginRoute } from './component/PrivateRoute';
import { getMylist } from './context/Action';

function App() {

  const { dispatch } = useContext(Context);

  useEffect(() => {
    getImages(dispatch);
    getMylist(dispatch);
    checkAuth(dispatch);
  }, [ dispatch ])

  return (
    <div className="container flex mx-auto px-2" >
      <Router>
        <Switch>
          <Route exact path={"/"} component={ImageList} />
          <LoginRoute exact path={"/login"} component={Login} />
          <Route exact path={"/register"} component={Register} />
          <Route exact path={"/product/:id"} component={ProductDetails} />
          <Route exact path={"/search/:query"} component={SearchList} />
          <PrivateRoute exact path={"/user/mylist"} component={MyList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
