import React, { useState, useEffect } from 'react';
import './assets/main.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './component/Login'
import ImageCard from './component/ImageCard';
import Register from './component/Register'
import ProductDetails from './component/ProductDetails';

function App() {
  const [ images, setImages ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);
  const [ term, setTerm ] = useState('');

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=23669520-2f277a9ed0fcd622c08b78e41&q=${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="container flex mx-auto px-4 my-6" >
      <Router>
        <Switch>
          <Route exact path={"/"} >
            <ImageCard images={images} />
          </Route>
          <Route exact path={"/login"} component={Login} />
          <Route exact path={"/register"} component={Register} />
          <Route exact path={"/productdetails"} component={ProductDetails} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
