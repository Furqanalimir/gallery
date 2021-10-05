import React from 'react';
import './assets/main.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './component/Login'
import ImageList from './component/ImageList';
import Register from './component/Register'
import ProductDetails from './component/ProductDetails';
import { ContextProvider } from './context/Context'


function App() {

  return (
    <div className="container flex mx-auto px-2 my-2" >
      <Router>
        <ContextProvider>
          <Switch>
            <Route exact path={"/"} component={ImageList} />
            <Route exact path={"/login"} component={Login} />
            <Route exact path={"/register"} component={Register} />
            <Route exact path={"/productdetails"} component={ProductDetails} />
          </Switch>
        </ContextProvider>
      </Router>
    </div>
  );
}

export default App;
