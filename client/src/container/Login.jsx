import React, { useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom';
import Layout from '../component/Layout'
import { LoginUser } from '../context/Action'
import { Context } from '../context/Context';

const Login = (props) => {

  let history = useHistory();

  const { dispatch, errMessage, isAuthenticated } = useContext(Context);

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const auth = localStorage.getItem('auth');

  const onSubmit = (e) => {
    e.preventDefault();

    const details = {
      email, password
    }

    LoginUser(details, dispatch);
    if (auth || isAuthenticated) 
    {
      history.goBack();
    }

    setEmail('');
    setPassword('');
  }



  return (
    <Layout>
      <div className="flex mx-auto px-auto py-12 my-12">
        <form className="mx-auto w-full max-w-lg py-6" onSubmit={onSubmit}>
          <div className="flex flex-col ">
            <h1 className="text-4xl py-2">Enter Your Credentials</h1>
            <p className="text-red-600 animate-pulse">{errMessage}</p>
            <label className='text-xl my-2'> Email </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email"
              className="border-2 border-gray-500 rounded h-9 p-2 focus:outline-none"
              required
            />

            <label className='text-xl my-2'> Password </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength="6"
              required
              placeholder="Enter your Password"
              className="border-2 border-gray-500 rounded h-9  px-2 focus:outline-none"
            />
            <button
              className="border-2 border-gray-500 rounded h-8  px-2 focus:outline-none my-2 bg-gray-700 text-gray-100"
            >Submit</button>
          </div>
          <p>don't have an account? <Link to="/register" className="text-blue-600">register</Link></p>
        </form>
      </div>
    </Layout>
  )
}

export default Login;