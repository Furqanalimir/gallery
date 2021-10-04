import React from 'react'
import ImageSearch from './ImageSearch'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="container  flex ">
      <div className="my-auto mx-auto">
        <Link to='/'>Home</Link>
      </div>
      <div className="my-auto mx-auto">
        <Link to='/login'>Profile</Link>
      </div>
      <div>
        <ImageSearch />
      </div>
      <div className="my-auto mx-auto">
        <Link to='/register'>Register</Link>
      </div>
      <div className="my-auto mx-auto">
        <Link to='/login'>Login</Link>
      </div>
    </div>
  )
}


export default Header;