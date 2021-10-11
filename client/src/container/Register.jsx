import React, { useState, useContext } from 'react'
import { Link, Redirect } from 'react-router-dom';
import Layout from '../component/Layout'
import { Context } from '../context/Context';
import { RegisterUser } from '../context/Action'

const Register = () => {

  const { isAuthenticated, dispatch, errMessage } = useContext(Context);

  const [ details, setDetails ] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const auth = localStorage.getItem('auth');
  if (isAuthenticated || auth)
  {
    return <Redirect to={'/'} />
  }

  const { name, email, password, confirmPassword } = details;

  const onChange = (e) => {
    setDetails({ ...details, [ e.target.name ]: e.target.value });
  }

  const onSubmit = e => {
    e.preventDefault();
    if (password !== confirmPassword)
    {
      console.log('passwords do not match')
      return null
    }
    RegisterUser(details, dispatch)

    setDetails({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  }

  return (
    <Layout>
      <div className="flex mx-auto px-auto py-12 my-12">
        <form className="mx-auto w-full max-w-lg py-6" onSubmit={onSubmit}>
          <label className="flex py-2 text-red-700" > * Required</label>
          <div className="flex flex-col ">
            <h1 className="text-2xl py-4 text-gray-800">Enter Your Credentials</h1>
            <p className="text-red-600 animate-pulse">{errMessage}</p>
            <label className="flex" > <p className="text-red-500">* </p>Name </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={e => onChange(e)}
              placeholder="Enter your Name"
              required
              className="border-2 border-gray-500 rounded h-8  px-2 focus:outline-none"
            />
            <label className="flex" > <p className="text-red-500">* </p>Email </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={e => onChange(e)}
              placeholder="Enter your Email"
              required
              className="border-2 border-gray-500 rounded h-8  px-2 focus:outline-none"
            />
            <label className="flex" > <p className="text-red-500">* </p>Password </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={e => onChange(e)}
              placeholder="Enter your Password"
              required
              minLength="6"
              className="border-2 border-gray-500 rounded h-8  px-2 focus:outline-none"
            />
            <label className="flex" > <p className="text-red-500">* </p>Confirm Password </label>
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={e => onChange(e)}
              required
              minLength="6"
              placeholder="Confirm your Password"
              className="border-2 border-gray-500 rounded h-8  px-2 focus:outline-none"
            />
            <button
              type="submit"
              className="border-2 border-gray-500 rounded h-8  px-2 focus:outline-none my-2 bg-gray-700 text-gray-100"
            >Submit</button>
            <p>alredy have an account? <Link to="/login" className="text-blue-600">login</Link></p>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default Register;